import { useState, useEffect, createRef } from 'react';
import AWS, { SES } from "aws-sdk";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const handleChange = (handler) => (event) => {
    handler(event.target.value);
};

const isEmail = (email = null) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

// const AWS_IDENTITY_POOL_ID = process.env.AWS_IDENTITY_POOL_ID;

const sendEmail = ({ successHandler, errorHandler, to, from, messageBody, org, phone }) => {
    AWS.config.region = 'eu-west-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-west-1:c60a7788-6d53-4451-b2f0-e0f68f7c082d',
    });
    const ses = new SES({ apiVersion: "2010-12-01" });
    const params = {
        Destination: {
            ToAddresses: [
                'marko.jakic@vertrical.com',
                'nils.widal@vertrical.com',
                'daniel.fischer@vertrical.com',
            ],
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: `Phone: ${phone}\n\nOrganization: ${org}\n\n\n${messageBody}`,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: `Contact request from ${from}`,
            },
        },
        ReplyToAddresses: [to],
        Source: 'start@vertrical.com',
    };
    const sent = ses.sendEmail(params).promise();
    sent
        .then(function (data) {
            successHandler();
        })
        .catch(function (err) {
            errorHandler();
        });
};

const ContactForm = ({ showModalConfig, toggleModalConfig }) => {

    const targetRef = createRef();
    let targetElement = null;

    const [myName, setMyName] = useState("");
    const [email, setEmail] = useState("");
    const [messageBody, setMessageBody] = useState("");
    const [organization, setOrganization] = useState("");
    const [phone, setPhone] = useState("");
    const [isError, setIsError] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submittied, setSubmitted] = useState(false);

    useEffect(() => {
        return () => {
            clearAllBodyScrollLocks();
        };
    }, []);

    useEffect(() => {
        if (showModal) {
            targetElement = targetRef.current;
            disableBodyScroll(targetElement);
        }
    }, [showModal]);

    useEffect(() => {
        if (showModalConfig) {
            setShowModal(true);
        }
    }, [showModalConfig]);

    const handleContact = (e) => {
        e.preventDefault();
        // setIsSendDisabled(true);
        const lead_source = 'Contact Us Web Form';
        fetch(`https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=00D5f000002adMU&retURL=https://vertrical.com/&first_name=${myName}&/last_name=${myName}&company=${organization}&email=${email}&phone=${phone}&lead_source=${lead_source}&description=${messageBody}`, {
            method: 'POST',
            mode: 'no-cors'
        }).then((res) => {
            console.log('response here')
            res.text()
        }).then((result) => {
            console.log('result here');
            console.log(result);
        }).catch((err) => {
            console.log('error', error);
        });

        setSubmitting(true);
        if (!email || !myName || !messageBody || !isEmail(email)) {
            setIsError(true);
            // setIsSendDisabled(false);
            setSubmitting(true);
            return;
        }
        sendEmail({
            successHandler: () => {
                setIsError(false);
                // setFormSent(true);
                setSubmitted(true);
                // setIsSendDisabled(true);
                setSubmitting(false);
            },
            errorHandler: () => {
                setIsError(true);
                // setIsSendDisabled(false);
                setSubmitting(true);
            },
            to: email,
            from: myName,
            messageBody,
            org: organization,
            phone,
        });
    };

    // const handleSubmit = () => {
    //     setSubmitting(true);
    //     setTimeout(() => {
    //         setSubmitting(false);
    //         setSubmitted(true);
    //     }, 2500);
    // }

    const handleClose = () => {
        targetElement = targetRef.current;
        enableBodyScroll(targetElement);
        setSubmitting(false);
        setSubmitted(false);
        setShowModal(false);
        toggleModalConfig();
    }

    const handleFormChange = () => {
        if (email && myName && messageBody && isEmail(email)) {
            setIsError(false);
            setSubmitting(false);
            return;
        }
    }

    return (
        <>
            {showModal &&
                <div ref={targetRef} className="fixed inset-0 bg-gray-200 bg-opacity-70 flex items-center justify-center h-screen z-50">
                    <div className="z-70 relative bg-white px-12 sm:px-20 md:px-24 py-4 mx-2 lg:mx-0 w-full lg:w-5/12 h-auto max-h-92vh max-w-3xl overflow-y-auto rounded-md">
                        {!submittied && <><button className="text-xs font-semibold absolute top-4 right-4" onClick={() => handleClose()}>Close</button>
                            <p className="font-bold text-2xl text-center mt-8">
                                <span className="hidden lg:block">
                                    Have a question or<br className="hidden lg:inline" />  want to say hi?
                               </span>
                                <span className="block lg:hidden text-3xl mb-4">
                                    Contact Us
                                </span>
                            </p>
                            <div className="hidden lg:flex justify-center items-center my-4 ">
                                <img className="h-24 w-24 object-contain" src="/nils.png" alt="nils"></img>
                                <div className="ml-4">
                                    <p className="font-bold">Nils Widal</p>
                                    <p className="font-medium text-sm ">CEO at Vertrical</p>
                                    <div className="flex items-center text-sm mt-2">
                                        <img src="/linkedin.png" alt="linkedIn" className="h-6 w-6 mr-2 object-contain"></img>
                                        <a className="underline" href="https://www.linkedin.com/in/nils-widal/?locale=de_DE" target="_blank" rel="noreferrer">Profile</a>
                                    </div>
                                </div>
                            </div>

                            <form className="flex flex-col" onChange={() => handleFormChange()}>
                                <div className="w-full">
                                    <label className="text-sm mb-3 font-semibold text-gray-500">Name*</label>
                                    <input value={myName} onChange={handleChange(setMyName)} required autoFocus={true} type="text" className="rounded-md lg:rounded-sm text-sm w-full mb-2 border border-gray-400 px-3 py-3 lg:py-1 border-1"></input>
                                </div>

                                <div className="w-full">
                                    <label className="text-sm mb-3 font-semibold text-gray-500">Email*</label>
                                    <input type="email" value={email} onChange={handleChange(setEmail)} required className="rounded-md lg:rounded-sm text-sm w-full mb-2 border border-gray-400 px-3 py-3 lg:py-1 border-1"></input>
                                </div>

                                <div className="hidden lg:block w-full">
                                    <label className="text-sm mb-3 font-semibold text-gray-500">Organization</label>
                                    <input type="text" value={organization} onChange={handleChange(setOrganization)} className="rounded-md lg:rounded-sm text-sm w-full mb-2 border border-gray-400 px-3 py-3 lg:py-1 border-1"></input>
                                </div>

                                <div className="hidden lg:block w-full">
                                    <label className="text-sm mb-3 font-semibold text-gray-500">Phone number</label>
                                    <input type="text" value={phone} onChange={handleChange(setPhone)} className="rounded-md lg:rounded-sm text-sm w-full mb-2 border border-gray-400 px-3 py-3 lg:py-1 border-1"></input>
                                </div>

                                <div className="w-full">
                                    <label className="text-sm mb-3 font-semibold text-gray-500">Message*</label>
                                    <textarea rows="8" value={messageBody} onChange={handleChange(setMessageBody)} placeholder="Please type your message here" className="text-sm w-full mb-2 border border-gray-400 px-3 py-2 border-1"></textarea>
                                </div>

                                <div
                                    className={`${isError ? "block" : "hidden"
                                        } block abosulte bottom-0 left-0 text-left font-opensans text-sm text-red-600`}
                                >
                                    Please fill correctly all fields.
                                </div>

                                <p className="text-sm mt-1 hidden lg:block">Required fields are marked with an asterisk (*)</p>
                                <button
                                    onClick={handleContact}
                                    disabled={submitting} className={"bg-vert-green py-2 mx-auto my-6 text-white font-bold rounded-md lg:rounded-sm hover:bg-vert-green-light active:bg-vert-green-dark focus:outline-none focus:border-0 focus:ring focus:ring-vert-green-light " + (submitting ? 'disabled: opacity-50' : '')} style={{ width: '202px' }}
                                >
                                    Contact us
                                </button>

                            </form>
                        </>}
                        {
                            submittied && <div className="w-full h-full flex items-center justify-center flex-col">
                                <p className="font-bold text-2xl text-center mt-8">
                                    Thanks for your message! <br className="hidden lg:inline" />
                                    We will get back to you shortly
                                </p>
                                <button onClick={() => handleClose()} disabled={submitting} className={"bg-vert-green py-2 mx-auto my-6 text-white font-bold rounded-md lg:rounded-sm hover:bg-vert-green-light active:bg-vert-green-dark focus:outline-none focus:border-0 focus:ring focus:ring-vert-green-light " + (submitting ? 'disabled: opacity-50' : '')} style={{ width: '130px' }}>Close</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default ContactForm

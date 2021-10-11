
import ButtonCtrl from './BtnCtrl';
import { useEffect, useState, useRef } from 'react'
import ContactForm from "./ContactForm"

const AnimatedContactButton = ({ text = 'Contact Us', classes }) => {
    const [button, setButton] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const ref = useRef(null)

    useEffect(() => {
        // initialize custom cursor
        setButton(new ButtonCtrl(ref.current));
    }, [])

    return (
        <>
            <button ref={ref} onClick={() => {
                setShowModal(true);
            }} className={"button text-white text-center text-sm opacity-100 rounded px-3 py-2 lg:px-5 lg:py-3 hover:opacity-100 " + classes}>
                <span className="button__text">
                    <span className="button__text-inner">{text}</span>
                </span>
            </button>
            <ContactForm showModalConfig={showModal} toggleModalConfig={() => { setShowModal(!showModal) }}></ContactForm>
        </>
    )
}


export default AnimatedContactButton



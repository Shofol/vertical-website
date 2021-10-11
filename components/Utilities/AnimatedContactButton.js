
import ButtonCtrl from './BtnCtrl';
import { useEffect, useState } from 'react'
import ContactForm from "./ContactForm"

const AnimatedContactButton = () => {
    const [button, setButton] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // initialize custom cursor
        setButton(new ButtonCtrl(document.querySelector('.button')));
    }, [])

    return (
        <>
            <button onClick={() => {
                setShowModal(true);
            }} className="button bg-vert-green text-white text-center text-sm opacity-100 rounded px-3 py-2 lg:px-5 lg:py-3 hover:opacity-100">
                <span className="button__text">
                    <span className="button__text-inner">Contact</span>
                </span>
            </button>
            <ContactForm showModalConfig={showModal} toggleModalConfig={() => { setShowModal(!showModal) }}></ContactForm>
        </>
    )
}


export default AnimatedContactButton



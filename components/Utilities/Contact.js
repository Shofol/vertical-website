import ContactForm from "./ContactForm"
import { useState } from "react";

const Contact = ({ text = 'Contact Us', classes }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className={"text-white text-center text-sm opacity-100 rounded px-3 py-2 lg:px-5 lg:py-3   " + classes}>
        {text}
      </button>
      <ContactForm showModalConfig={showModal} toggleModalConfig={() => { setShowModal(!showModal) }}></ContactForm>

    </div>
  );
};

export default Contact;

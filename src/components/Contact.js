import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Footer from "./Footer";
import "./Contact.css"

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_drdamsj', 'template_u400f9n', form.current, 'aEGfpsjVO8A23dHoe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
      <h2 className="contact-header">CONTACT ME</h2>
      <h4 className="contact-subheader">Get in touch with me with any question or inquiries</h4>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <br />
        <input 
        type="text" 
        id="name" 
        name="user_name" 
        required placeholder="Name:"
        />
        <br />
        <input
          type="email"
          id="email"
          name="user_email"
          required
          placeholder="Email:"
        />
        <br />
        <input
          id="subject"
          name="subject"
          required
          placeholder="Subject:"
        />
        <br />
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message:"
        ></textarea>
        <button className="contact-button" type="submit">Send Message</button>
      </form>
    <div className="contact-footer">
    <Footer />
  </div>
    </>
  );
}

export default Contact;
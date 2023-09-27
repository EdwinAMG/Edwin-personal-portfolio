import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/ContactMe.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8790pq9",
        "template_d31rvqo",
        form.current,
        "MvTCIPbkBDWOVEd-C"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="container-contact-page">
      <div className="text-zone">
        <h1 className="contact-please">Contact Me</h1>
        <p className="intership">
          I am actively seeking internship opportunities, especially in the
          field of front-end development. However, I am also proficient in
          quickly adapting to various roles. As I am approaching my graduation
          from university, I am enthusiastic about applying my skills and
          expertise to real-world projects. If you have any internship openings
          or any questions, please don't hesitate to contact me using the form
          below.
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;

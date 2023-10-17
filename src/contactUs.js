import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contactus.css";
import Aos from "aos";
import "aos/dist/aos.css";
import illustration1 from "./images/99.png";
import { useEffect } from "react";
export const ContactUs = () => {
  //Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8b01vfe",
        "template_3ud34fk",
        form.current,
        "76WYEDdwH2eMBcmfi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Aos
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="container-contact">
        <div data-aos="fade-right" className="col-6 c1">
          <img src={illustration1} alt="" />
        </div>
        <div data-aos="fade-left" className="col-6 contact text-center c2 ">
          <h1 className="py-5 text-light">Let's Connect</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row g-3 ">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control bg-dark"
                  placeholder="Name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="Email"
                  name="email"
                  className="form-control bg-dark"
                  placeholder="Email"
                  required
                  // email validation
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div>
                <textarea
                  className="form-control bg-dark"
                  name="subject"
                  required
                  placeholder="Subject"
                  id="floatingTextarea"
                ></textarea>
              </div>
              <div>
                <textarea
                  className="form-control bg-dark p-3"
                  name="message"
                  required
                  placeholder="Message"
                  id="floatingTextarea"
                ></textarea>
              </div>
              <div className="col align-self-center">
                <button
                  type="submit"
                  className="btn btn-outline-warning "
                  required
                  data-bs-toggle="popover"
                  title="Your Message Sent"
                  data-bs-content="The message was sent via email "
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

import React from "react";
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">
        "Connecting to Build Opportunities"
      </span>
      <div className="contact__container conainer grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-gmail contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                amolpatil147007@gmail.com
              </span>
              <a
                href="mailto:amolpatil147007@gmail.com"
                className="contact__button"
              >
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
              </a>
            </div>
            <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 - 8605549719</span>
              <a
                href="https://wa.me/918605549719"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

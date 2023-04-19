import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Amol</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#academics" className="footer__link">
              Academics
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/iamolofficial"
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/iamolofficial/"
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/IAMolOfficial"
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://github.com/IAMolofficial"
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/iamolofficial/"
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">
        &#169; Amol. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

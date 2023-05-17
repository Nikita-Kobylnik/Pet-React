import React from "react";
import "./Footer.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__contacts contacts">
            <div className="contacts__top">
              <h6 className="contacts__title">Контактні дані</h6>
              <p className="contacts__text">
                Innovation Reliability Stability «КРАСТІ-КРАБ»
              </p>
              <p className="contacts__text">Код ЄДРПОУ 00110011</p>
            </div>
            <ul className="contacts__list">
              <li className="contacts__item">
                <BsTelephone className="contacts__icon" />
                <a href="tel:+380960226996" className="contacts__link">
                  +38 (096) 022-69-96
                </a>
              </li>
              <li className="contacts__item">
                <FiMail className="contacts__icon" />
                <a
                  href="mailto:plastipakUA@gmail.com"
                  className="contacts__link"
                >
                  plastipakUA@gmail.com
                </a>
              </li>
              <li className="contacts__item">
                <FaMapMarkerAlt className="contacts__icon" />
                <a
                  href="https://goo.gl/maps/VLTCzR4sdFNaaaUq8?coh=178573&entry=tt"
                  className="contacts__link"
                >
                  В'їзд Орешкова, 1, смт. Васищево, Харківська область, Україна
                </a>
              </li>
            </ul>
            <ul className="contacts__socials socials">
              <li className="socials__item">
                <a
                  href="https://www.instagram.com/polytrade.ukraine/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials__link"
                >
                  <BsInstagram className="socials__icon" />
                </a>
              </li>
              <li className="socials__item">
                <a
                  href="https://www.facebook.com/pages/category/E-commerce-Website/Poly-Trade-101153351741542/"
                  className="socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrFacebook className="socials__icon" />
                </a>
              </li>
            </ul>
          </div>
          <Logo />
          <div className="footer__map map">
            <div className="map__wrapper">
              <iframe
                className="map__frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569.4141852326176!2d36.33608875810236!3d49.8200378368434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127723c2d44ff37%3A0x8ec7db6f55cec955!2z0LLRitC10LfQtCDQntGA0LXRiNC60L7QstCwLCDQktCw0YHQuNGJ0LXQstC-LCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MjQ5NQ!5e1!3m2!1sru!2sua!4v1683798979868!5m2!1sru!2sua"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="pet"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer__copy">2023 © Всі права захищені</div>
    </footer>
  );
};

export default Footer;

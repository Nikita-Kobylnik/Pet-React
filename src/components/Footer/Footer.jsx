import React from "react";
import "./Footer.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { BsInstagram, BsTelegram, BsTelephone } from "react-icons/bs";
import { FaViber, FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#495fac" }}>
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
                <a href="tel:+380000000000" className="contacts__link">
                  +38 (000) 000 00 00
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
                  href="https://goo.gl/maps/zfkoYiJJm3NVUP9v7?coh=178573&entry=tt"
                  className="contacts__link"
                >
                  м. Київ, Киево-Печерская лавра
                </a>
              </li>
            </ul>
            <ul className="contacts__socials socials">
              <li className="socials__item">
                <a href="/#" className="socials__link">
                  <BsInstagram className="socials__icon" />
                </a>
              </li>
              <li className="socials__item">
                <a href="/#" className="socials__link">
                  <BsTelegram className="socials__icon" />
                </a>
              </li>
              <li className="socials__item">
                <a href="/#" className="socials__link">
                  <FaViber className="socials__icon" />
                </a>
              </li>
            </ul>
          </div>
          <Logo />
          <div className="footer__map map">
            <div className="map__wrapper">
              <iframe
                className="map__frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30287.33343635165!2d30.599362864106265!3d50.43302811799047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa04a0c8e5b%3A0x3b40a2bcbca08807!2z0JrQuNC10LLQvi3Qn9C10YfQtdGA0YHQutCw0Y8g0LvQsNCy0YDQsA!5e0!3m2!1sru!2sua!4v1683752614095!5m2!1sru!2sua"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="pet"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

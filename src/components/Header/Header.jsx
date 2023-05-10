import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import BigContainer from "../BigContainer/BigContainer";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <BigContainer>
        <div className="header__inner">
          <Logo />
          <div className="header__wrapper">
            <nav className="header__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink to="/" className="menu__link">
                    Про компанію
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/products" className="menu__link">
                    Продукція
                  </NavLink>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Сертифікати
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="languages">
              <li className="languages__item">
                <button className="languages__btn">UA</button>
              </li>
            </ul>
          </div>
        </div>
      </BigContainer>
    </header>
  );
};

export default Header;

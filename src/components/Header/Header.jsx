import React, { useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import BigContainer from "../BigContainer/BigContainer";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  activeBurger
    ? document.body.classList.add("_lock")
    : document.body.classList.remove("_lock");

  return (
    <header className="header">
      <BigContainer>
        <div className="header__inner">
          <Logo />
          <nav className={`header__menu menu ${activeBurger ? "_active" : ""}`}>
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink
                  to="/"
                  className="menu__link"
                  onClick={() => setActiveBurger(!activeBurger)}
                >
                  Про компанію
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/products"
                  className="menu__link"
                  onClick={() => setActiveBurger(!activeBurger)}
                >
                  Продукція
                </NavLink>
              </li>
              <li className="menu__item">
                <a href="/#" className="menu__link">
                  Сертифікати
                </a>
              </li>
            </ul>
            <ul className="languages">
              <li className="languages__item">
                <button className="languages__btn">UA</button>
              </li>
            </ul>
          </nav>
          <div
            className="burger"
            onClick={() => setActiveBurger(!activeBurger)}
          >
            {activeBurger ? (
              <MdClose className="burger__close" />
            ) : (
              <FiMenu className="burger__icon" />
            )}
          </div>
        </div>
      </BigContainer>
    </header>
  );
};

export default Header;

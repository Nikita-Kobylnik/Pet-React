import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import BigContainer from "../BigContainer/BigContainer";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import img1 from "../../assets/img/certificates/1.jpg";
import img2 from "../../assets/img/certificates/2.jpg";
import img3 from "../../assets/img/certificates/3.jpg";
import img4 from "../../assets/img/certificates/4.jpg";
import img5 from "../../assets/img/certificates/5.jpg";
import img6 from "../../assets/img/certificates/6.jpg";
import img7 from "../../assets/img/certificates/7.jpg";
import img8 from "../../assets/img/certificates/8.jpg";

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const handleBurgerClick = () => {
    setActiveBurger(!activeBurger);
    const isMobile = window.innerWidth < 576.98;
    if (isMobile && !activeBurger) {
      document.body.classList.add("_lock");
    } else {
      document.body.classList.remove("_lock");
    }
  };

  useEffect(() => {
    // Инициализируем FancyBox при монтировании компонента
    NativeFancybox.defaults.animationEffect = "fade";
    NativeFancybox.defaults.transitionEffect = "slide";
    NativeFancybox.defaults.loop = true;
    NativeFancybox.defaults.buttons = [
      "zoom",
      "slideShow",
      "fullScreen",
      "close",
    ];

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  const openGallery = () => {
    const images = [
      { src: img1 },
      { src: img2 },
      { src: img3 },
      { src: img4 },
      { src: img5 },
      { src: img6 },
      { src: img7 },
      { src: img8 },
    ];
    NativeFancybox.show(images);
  };

  return (
    <header className="header" id="header">
      <BigContainer>
        <div className="header__inner">
          <Logo />
          <nav className={`header__menu menu ${activeBurger ? "_active" : ""}`}>
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink
                  to="/"
                  className="menu__link"
                  onClick={handleBurgerClick}
                >
                  Про компанію
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/products"
                  className="menu__link"
                  onClick={handleBurgerClick}
                >
                  Продукція
                </NavLink>
              </li>
              <li className="menu__item">
                <button
                  onClick={openGallery}
                  className="menu__link"
                  id="open-gall"
                >
                  Сертифікати
                </button>
              </li>
            </ul>
            <ul className="languages">
              <li className="languages__item">
                <button className="languages__btn">UA</button>
              </li>
            </ul>
          </nav>
          <div className="burger" onClick={handleBurgerClick}>
            {activeBurger ? (
              <MdClose className="burger__close" />
            ) : (
              <FiMenu className="burger__icon" />
            )}
          </div>
        </div>
      </BigContainer>
      <div className="pswp"></div>
    </header>
  );
};

export default Header;

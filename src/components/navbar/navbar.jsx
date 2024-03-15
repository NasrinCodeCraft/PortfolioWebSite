import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./languages/en/translation.json";
import translationIR from "./languages/ir/translation.json";
import translationDE from "./languages/de/translation.json";
import translationAR from "./languages/ar/translation.json";
import flagEN from "./../../assets/images/en.png";
import flagIR from "./../../assets/images/ir.png";
import flagDE from "./../../assets/images/de.png";
import flagAR from "./../../assets/images/ar.png";

const resources = {
  en: {
    translation: translationEN,
  },
  ir: {
    translation: translationIR,
  },
  de: {
    translation: translationDE,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavItemClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const skillSection = document.getElementById("skill");
      const contactSection = document.getElementById("contact");
  
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      if (homeSection && scrollPosition < aboutSection.offsetTop) {
        setActivePage("home");
      } else if (aboutSection && scrollPosition < skillSection.offsetTop) {
        setActivePage("about");
      } else if (skillSection && scrollPosition < contactSection.offsetTop) {
        setActivePage("skill");
      } else if (contactSection) {
        setActivePage("contact");
      }
  
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "ir" || lng === "ar") {
      document.querySelector("nav").style.direction = "rtl";
      document.querySelector(".dropdown").style.direction = "ltr";
    } else {
      document.querySelector("nav").style.direction = "ltr";
    }
  };

  return (
    <nav
      style={{ display: visible ? "flex" : "none", transition: "opacity 0.5s" }}
      className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="#home" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primary fw-bold m-0">{t("brandName")}</h1>
      </a>

      <label className="menuToggle" htmlFor="demo" onClick={toggleMenu}>
        <input type="checkbox" id="demo" className="toggleMenu" checked={menuOpen} onChange={toggleMenu} />
        <button type="button" className="navbar-toggler" data-bs-toggle="" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
      </label>
      <a href="#home" className="navbar-brand bg py-3 px-4 mx-3 d-none d-lg-block">
        <h1 className="text-primary fw-bold m-0">{t("brandName")}</h1>
      </a>

      <div style={{ display: menuOpen ? "block" : "none" }} className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
        <div className="navbar-nav  py-0">

          <a href="#home" className={`nav-item nav-link ${activePage === "home" ? "active" : ""}`} onClick={() => handleNavItemClick("home")}>
            {t("home")}
          </a>
          <a href="#about" className={`nav-item nav-link ${activePage === "about" ? "active" : ""}`} onClick={() => handleNavItemClick("about")}>
            {t("about")}
          </a>
          <a href="#skill" className={`nav-item nav-link ${activePage === "skill" ? "active" : ""}`} onClick={() => handleNavItemClick("skill")}>
            {t("skills")}
          </a>
          <a href="#contact" className={`nav-item nav-link ${activePage === "contact" ? "active" : ""}`} onClick={() => handleNavItemClick("contact")}>
            {t("contact")}
          </a>
        </div>
        <div className="nav-item dropdown">
          <button className="btn btn-link dropdown-toggle" type="button" id="dropdownLanguage" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: "0.5px solid rgba(0,0,255,0.5)", textDecoration: 'none' }}>
            <img src={i18n.language === "en" ? flagEN : (i18n.language === "ir" ? flagIR : (i18n.language === "de" ? flagDE : flagAR))} alt={i18n.language === "en" ? "English" : (i18n.language === "ir" ? "Persian" :(i18n.language === "de" ? "German" : "Arabic"))} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            {i18n.language === "en" ? "English" : (i18n.language === "ir" ? "فارسی" : (i18n.language === "de" ? "Deutsch" : "عربي"))}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownLanguage" style={{ textDecoration: 'none' }}>
            <li><button className="dropdown-item" onClick={() => changeLanguage("ir")} style={{ textDecoration: 'none' }}><img src={flagIR} alt="Persian" style={{ width: "30px", height: "30px", marginRight: "5px" }} />Persian</button></li>
            <li><button className="dropdown-item" onClick={() => changeLanguage("en")} style={{ textDecoration: 'none' }}><img src={flagEN} alt="English" style={{ width: "30px", height: "30px", marginRight: "5px" }} />English</button></li>
            <li><button className="dropdown-item" onClick={() => changeLanguage("de")} style={{ textDecoration: 'none' }}><img src={flagDE} alt="German" style={{ width: "30px", height: "30px", marginRight: "5px" }} />German</button></li>
            <li><button className="dropdown-item" onClick={() => changeLanguage("ar")} style={{ textDecoration: 'none' }}><img src={flagAR} alt="Arabic" style={{ width: "30px", height: "30px", marginRight: "5px" }} />Arabic</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

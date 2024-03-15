import React, { useEffect, useState, useRef } from 'react';
import WOW from 'wowjs';
import aboutImg1 from './../../assets/images/about-1.jpg';
import aboutImg2 from './../../assets/images/about-2.jpg';
import { useTranslation } from "react-i18next";

function About({ maxValue = 6 }) {
  const [counter, setCounter] = useState(0);
  const showinRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounter((prevCounter) => {
              const newCounter = prevCounter + 1;
              return newCounter <= maxValue ? newCounter : prevCounter;
            });
          }, 500);
          return () => clearInterval(interval);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });

    if (showinRef.current) {
      observer.observe(showinRef.current);
    }

    return () => observer.disconnect();
  }, [maxValue]);

  // Mapping object for English to Persian digits
  const persianDigits = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹',
  };

  // Function to convert English digits to Persian digits
  const convertToPersianDigits = (number) => {
    return number.toString().split('').map(digit => persianDigits[digit] || digit).join('');
  };

  const containerAbout = document.querySelector(".containerAbout");
  const projectsCompleted = document.querySelector(".projectsCompleted");
  const happyClients = document.querySelector(".happyClients");
  const colH5HappyClients = document.querySelector(".colH5HappyClients");
  const colH5projectsCompleted = document.querySelector(".colH5projectsCompleted");
  const styleprojectsCompleted = document.querySelector(".styleprojectsCompleted");
  const styleHappyClients = document.querySelector(".styleHappyClients");

  if(containerAbout) {
    containerAbout.style.direction = (i18n.language === "ir" || i18n.language === "ar") ? "rtl" : "ltr";
    if (i18n.language === "ir" || i18n.language === "ar") {
      projectsCompleted.classList.add("justify-content-end");
      happyClients.classList.add("justify-content-end");
      colH5HappyClients.style.marginLeft="auto";
      colH5projectsCompleted.style.marginLeft="auto";
      colH5HappyClients.style.paddingLeft="20px";
      colH5projectsCompleted.style.paddingLeft="20px";
      colH5HappyClients.style.whiteSpace = "nowrap";
      colH5projectsCompleted.style.whiteSpace = "nowrap";
      colH5HappyClients.classList.remove("border-end");
      colH5projectsCompleted.classList.remove("border-end");
      colH5HappyClients.classList.remove("me-3");
      colH5projectsCompleted.classList.remove("me-3");
      colH5HappyClients.classList.remove("pe-3");
      colH5projectsCompleted.classList.remove("pe-3");
      colH5HappyClients.classList.add("pe-0");
      colH5projectsCompleted.classList.add("pe-0");
      styleHappyClients.style.width="100%"
      styleprojectsCompleted.style.width="100%";
    } else {
      colH5HappyClients.style.paddingLeft="0px";
      colH5projectsCompleted.style.paddingLeft="0px";
      colH5HappyClients.classList.add("border-end");
      colH5projectsCompleted.classList.add("border-end");
      colH5HappyClients.classList.add("me-3");
      colH5projectsCompleted.classList.add("me-3");
      colH5HappyClients.classList.add("pe-3");
      colH5projectsCompleted.classList.add("pe-3");
    }
  }


  return (
    <>
      <div className="container-xxl py-6" id="about">
        <div className="container">
          {/* direction */}
          <div className="row g-5 containerAbout">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-5">
                <div className="years flex-shrink-0 text-center me-4">
                  <h1 className="display-1 mb-0" style={{paddingLeft:"25px"}}>{t("3")}</h1>
                  <h5 className="mb-0">{t("Years")}</h5>
                </div>
                <h3 className="lh-base mb-0">{t("of working experience as a web designer & developer")}</h3>
              </div>
              <p className="mb-4">{t("I'm a web developer and designer who loves creating unique user experiences and building beautiful and efficient user interfaces. With several years of experience in this field, I am always looking to learn and update my skills so that I can create the best experience for users. With the ability to design and develop dynamic and responsive websites, I am ready to help you turn your ideas into reality.")}</p>
              <p className="mb-3"><i className="far fa-check-circle text-primary me-3 rounded-1 bg-primary"></i>{t("Afordable Prices")}</p>
              <p className="mb-3"><i className="far fa-check-circle text-primary me-3 rounded-1 bg-primary"></i>{t("High Quality Product")}</p>
              <p className="mb-3"><i className="far fa-check-circle text-primary me-3 rounded-1 bg-primary"></i>{t("On Time Project Delivery")}</p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="#home">{t("Read More")}</a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <img className="img-fluid rounded mx-auto" src={aboutImg1} alt="aboutImg1" />
                </div>
                <div className="col-sm-6">
                  <img className="img-fluid rounded mx-auto" src={aboutImg2} alt="aboutImg2" />
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 happyClients">
                <h5 className="border-end pe-3 me-3 mb-0 colH5HappyClients">{t("Happy Clients")}</h5>
                <h2 ref={showinRef} className="text-primary fw-bold mb-0 styleHappyClients">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(counter) : counter}</h2>
              </div>
              <p className="mb-4">{t("With my efficient and attractive web designs, my clients always enjoy a positive experience and ease of use of their site, which makes them satisfied.")}</p>
              <div className="d-flex align-items-center mb-3 projectsCompleted">
                <h5 className="border-end pe-3 me-3 mb-0 colH5projectsCompleted">{t("Projects Completed")}</h5>
                <h2 className="text-primary fw-bold mb-0 styleprojectsCompleted">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(counter) : counter}</h2>
              </div>
              <p className="mb-0">{t("The projects I have completed so far have always demonstrated high standards and overall quality, with my clients very satisfied with the end result.")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;


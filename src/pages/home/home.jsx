import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import downloadCv from "./../../assets/files/cv.pdf";
import prorfile from "./../../assets/images/profile.png"; // Import the profile image
import VideoBio from './../../assets/video/bio.mp4';
import VideoBioIr from './../../assets/video/bio_ir.mp4';
import VideoBioAr from './../../assets/video/bio_ar.mp4';
import VideoBioDe from './../../assets/video/bio_de.mp4';
import VideoBioEn from './../../assets/video/bio_en.mp4';
import { useTranslation } from "react-i18next";
import { Modal } from 'bootstrap'; // Import Bootstrap Modal component
import ReactPlayer from 'react-player';

function Home() {
  const { t, i18n } = useTranslation();
  const [typedInstance, setTypedInstance] = useState(null);

  useEffect(() => {
    const typedTextOutput = document.querySelector('.typed-text-output');

    if (typedTextOutput) {
      const typedStrings = [t("Web Designer"), t("Front End Developer")];

      const typed = new Typed('.typed-text-output', {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
        onStart: (self) => {
          setTypedInstance(self);
        }
      });

      // Cleanup the Typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, [t]);

  const openVideoModal = () => {
    const videoModal = new Modal(document.getElementById('videoModal'));
    videoModal.show();
  };

  const closeVideoModal = () => {
    const videoModal = new Modal(document.getElementById('videoModal'));
    videoModal.hide();
  };

  useEffect(() => {
    // Update typed strings when language changes
    if (typedInstance) {
      const typedStrings = t("typedText").split(', ');
      typedInstance.reset();
      typedInstance.strings = typedStrings;
      typedInstance.start();
    }

    // Change direction of typed text based on language
    const directionMoon = document.querySelector(".containerMoon");
    const bottomtypedTextElement = document.querySelector(".bottom-typed");
    const containerHome = document.querySelector(".containerHome");
    const modalheader = document.querySelector(".modal-video");

    if (bottomtypedTextElement) {
      containerHome.style.direction = (i18n.language === "ir" || i18n.language === "ar") ? "rtl" : "ltr";
      bottomtypedTextElement.style.direction = "ltr";
      modalheader.style.direction = (i18n.language === "ir" || i18n.language === "ar") ? "ltr" : "ltr";
      directionMoon.style.direction = (i18n.language === "ir" || i18n.language === "ar") ? "ltr" : "rtl";
    }

  }, [i18n.language, t, typedInstance]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Define video URL based on language
  let videoUrl;
  switch (i18n.language) {
    case 'en':
      videoUrl = VideoBioEn;
      break;
    case 'ar':
      videoUrl = VideoBioAr;
      break;
    case 'de':
      videoUrl = VideoBioDe;
      break;
    case 'ir':
      videoUrl = VideoBioIr;
      break;
    default:
      videoUrl = VideoBio; // Default to English
  }

  return (
    <div className='containerHome'>
      <div className="container-fluid backgroundColorSky my-6 mt-0" id="home">
        <div className="container-fluid stars">
          <div className='container'>
            <div className="row g-5 align-items-center">
              <div className='containerMoon'>
                <div className="moon" style={{ marginBottom: "150%" }}></div>
              </div>
              <div className="col-lg-6 py-6 pb-0 pt-lg-0 direcion-typed">
                <h3 className="text-primary mb-3" style={{ paddingTop: "100px" }}>{t("Im")}</h3>
                <h1 className="display-3 mb-3"><b>{t("NasrinMokhtari")}</b></h1>
                <h2 className="typed-text-output d-inline"></h2>
                <div className="typed-text d-none"></div>
                <div className="d-flex align-items-center pt-5 bottom-typed">
                  <a href={downloadCv} className="btn btn-primary py-3 px-4 me-5" target="_blank">{t("downloadCV")}</a>
                  <button
                    type="button"
                    className="btn-play"
                    onClick={openVideoModal}
                  >
                    <span></span>
                  </button>
                  <h5 className="ms-4 mb-0 d-none d-sm-block" onClick={openVideoModal}>
                    {t("playVideo")}
                  </h5>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid" src={prorfile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">{t("videoPlayer")}</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeVideoModal}></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  playing={false} // Set to true if you want the video to auto-play
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import SkillProgressBar from "../../components/skills/skillProgressBar";
import { useTranslation } from "react-i18next";

function Skills() {
    const { t, i18n } = useTranslation();
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
        9: '۹'
    };
    // Function to convert English digits to Persian digits
    const convertToPersianDigits = (number) => {
        return number.toString().split('').map(digit => persianDigits[digit] || digit).join('');
    };

    const tabContent = document.querySelector(".tab-content");
    const mySkill = document.querySelector(".mySkill");
    if (mySkill) {
        if (i18n.language === "ir" || i18n.language === "ar") {
            tabContent.style.direction = "rtl";
            mySkill.style.direction = "rtl";
        } else {
            tabContent.style.direction = "ltr";
            mySkill.style.direction = "ltr";
        }
    }

    return (
        <>
            <div className="container-xxl py-6 pb-5" id="skill">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp mySkill" data-wow-delay="0.1s">
                            <h1 className="display-5 mb-5">{t("Skills & Experience")}</h1>
                            <p className="mb-4">{t("Unparalleled ability in web design and programming points to my achievements from years of experience in this field. I have always responded to the satisfaction of my customers.")}</p>
                            <h3 className="mb-4">{t("My Skills")}</h3>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <SkillProgressBar skillName={t("HTML")} percentage={(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(95) : 95} color="bg-primary" />
                                    <SkillProgressBar skillName={t("CSS")} percentage={(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(85) : 85} color="bg-warning" />
                                    <SkillProgressBar skillName={t("BootStrap")} percentage={(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(90) : 90} color="bg-danger" />
                                </div>
                                <div className="col-md-6">
                                    <SkillProgressBar skillName={t("Javascript")} percentage={(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(90) : 90} color="bg-danger" />
                                    <SkillProgressBar skillName={t("React")} percentage={(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(95) : 95} color="bg-dark" />
                                    <SkillProgressBar skillName={t("Responsive")} percentage={(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits(85) : 85} color="bg-info" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                                <li className="nav-item w-50">
                                    <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">{t("Experience")}</button>
                                </li>
                                <li className="nav-item w-50">
                                    <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">{t("Education")}</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row gy-5 gx-4">
                                        <div className="col-sm-6">
                                            <h5>{t("UI Designer")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2014 - 2016") : "2014 - 2016"}</p>
                                            <h6 className="mb-0">{t("Malek Conservatory")}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>{t("Product Designer")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2014 - 2016") : "2014 - 2016"}</p>
                                            <h6 className="mb-0">{t("Malek Conservatory")}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>{t("Web Designer")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2016 - 2024") : "2016 - 2024"}</p>
                                            <h6 className="mb-0">{t("Education and work")}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>{t("Apps Designer")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2016 - 2021") : "2016 - 2021"}</p>
                                            <h6 className="mb-0">{t("Education")}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row gy-5 gx-4">
                                        <div className="col-sm-6">
                                            <h5>{t("Web Design Package")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2022 - 2023") : "2022 - 2023"}</p>
                                            <h6 className="mb-0">{t("Mirdamad Technical Complex")}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>{t("Bachelor of Computer Software")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2020 - 2022") : "2020 - 2022"}</p>
                                            <h6 className="mb-0">{t("University of Qom")}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>{t("Master's degree in computer")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2018 - 2020") : "2018 - 2020"}</p>
                                            <h6 className="mb-0">{t("Sommayeh College of Najaf Abad")}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>{t("Diploma in computer")}</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">{(i18n.language === "ir" || i18n.language === "ar") ? convertToPersianDigits("2016 - 2018") : "2016 - 2018"}</p>
                                            <h6 className="mb-0">{t("Malek Conservatory")}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills;

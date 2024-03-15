import { Telegram, Instagram, Youtube, Linkedin  } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

function Contact() {
    const { t, i18n } = useTranslation();
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
         // Set up an account at https://www.emailjs.com/
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        emailjs.sendForm('mokhtarinasrin200@gmail.', 'template_81vrjts', e.target, 'oBdvtTvvk85sp_zrH')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
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

  const contactPage = document.getElementById("contact");
  if (contactPage) {
      if (i18n.language === "ir" || i18n.language === "ar") {
          contactPage.style.direction = "rtl";
          const labels = document.querySelectorAll("label");
          labels.forEach(label => {
              label.style.right = "0";
          });
      }
      else {
        contactPage.style.direction = "ltr";
      }
  } 

    return(
        <>
        <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">{t("Let's Work Together")}</h1>
                </div>
                {/* <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="#home">Say Hello</a>
                </div> */}
            </div>
            <div className="row g-5">
                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="mb-2">{t("Location")}:</p>
                    <h3 className="fw-bold">{t("Iran , Tehran")}</h3>
                    <hr className="w-100" />
                    <p className="mb-2">{t("Phone number")}:</p>
                    <h3 className="fw-bold" style={{direction:"ltr"}}>{i18n.language === "ir" ? convertToPersianDigits("+98 991 07 16 073") : "+98 991 07 16 073"}</h3>
                    <hr className="w-100" />
                    <p className="mb-2">{t("Email")}:</p>
                    <h3 className="fw-bold" style={{direction:"ltr"}}>mokhtarinasrin200@gmail.com</h3>
                    <hr className="w-100" />
                    <p className="mb-2">{t("Follow me")}:</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-primary me-2" href="https://www.Telegram.me/programmer_1998"><Telegram color="#ffff" size={20} /></a>
                        <a className="btn btn-square btn-primary me-2" href="https://www.instagram.com/frontendcoffee"><Instagram color='#ffff' size={20} /></a>
                        <a className="btn btn-square btn-primary me-2" href="https://www.youtube.com/frontendcoffee"><Youtube color="#ffff" size={20} /></a>
                        <a className="btn btn-square btn-primary me-2" href="https://www.linkedin.com/dev-nasrin"><Linkedin color="#ffff" size={20} /></a>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="mb-4">{t("Hello, welcome to my site! If you have any questions, suggestions or needs, contact me. You can use the contact form below to send me your message. I will respond to your message quickly. Thank you for trusting me.")}</p>
                    <form onSubmit={sendEmail}>
                        <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" name="from_name"/>
                                <label htmlFor="name">{t("Your Name")}</label>
                            </div>
                        </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" name="from_email" />
                                    <label htmlFor="email">{t("Your Email")}</label>
                                </div>
                            </div>
                            {/* <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div> */}
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}} name="message"></textarea>
                                    <label htmlFor="message">{t("Message")}</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-5" type="submit">{t("Send Message")}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Contact;
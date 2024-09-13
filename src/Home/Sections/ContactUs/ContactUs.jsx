import { t } from "i18next";
import contactImg from "../../../assets/contactImg.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const ContactUs = () => {
  return (
    <>
    <div className="contactUsContainner" >

    
      <div className="contactUsSection">
        <h3>
          <span>{t("Contact")}</span> {t("us")}
        </h3>

        <div className="contactusDiv"id="contact_us">
          <div className="contactUsLeft">
            <img src={contactImg} alt="" />
            <p>
              {t("our_communication_hub")}
            </p>
          </div>
          <div className="contactUsRight">

            <div className="contactForm">
              <form action="">
                <label htmlFor="email">{t("email")}</label>
                <input type="email" />
                <label htmlFor="topic">{t("topic")} {t("title")}</label>
                <input type="text" />
                <label htmlFor="message">{t("message")}</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button className="submitBtn">{t("submit")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactUs;

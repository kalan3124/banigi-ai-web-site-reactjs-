import React, { useState } from "react";
import footerLogo from "../assets/logo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import TermsAndCondition from "../Components/TermsAndCondition";
import RefundPolicy from "../Components/RefundPolicy";
import { t } from "i18next";
const Footer = () => {
  const [showPP, setShowPP] = useState(false);
  const [showTC, setShowTC] = useState(false);
  const [showRP, setShowRP] = useState(false);

  const closeModal = () => {
    setShowPP(false);
    setShowRP(false);
    setShowTC(false);
  };
  return (
    <>
      <div className="footer_Section">
        <div className="footer_div">
          <div className="footer_left">
            <img src={footerLogo} alt="Banigi Ai" />

            <p>{t("transform_your_home_effortlessly")}</p>
            <div className="footer_social_link">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>

          <div className="footer_right">
            <div className="footer_quick_lnks">
              <h5>{t("quick_links")}</h5>
              <ul>
                <a href="#main_banner">
                  <li>{t("home")}</li>
                </a>
                <a href="#pricing">
                  <li>{t("pricing")}</li>
                </a>
                <a href="#faq">
                  <li>{t("faq")}</li>
                </a>
                <a href="#feedback">
                  <li>{t("feedback")}</li>
                </a>
                <a href="#contact_us">
                  <li>{t("contact_us")}</li>
                </a>
              </ul>
            </div>
            <div className="footer_design_types">
              <h5>{t("design_types")}</h5>
              <ul>
                <li>{t("interior_design")}</li>
                {/* <li>{t("exterior_design")}</li> */}
                <li>{t("landscape_design")}</li>
                <li>{t("custom_design")}</li>
              </ul>
            </div>
            <div className="footer_legal">
              <h5>{t("legal")}</h5>
              <ul>
                <li
                  onClick={() => {
                    setShowPP(!showPP);
                  }}
                >
                  {t("privacy_policy")}
                </li>
                {showPP && <PrivacyPolicy closeModal={closeModal} />}
                <li
                  onClick={() => {
                    setShowTC(!showTC);
                  }}
                >
                  {t("terms_conditions")}
                </li>
                {showTC && <TermsAndCondition closeModal={closeModal} />}
                <li
                  onClick={() => {
                    setShowRP(!showRP);
                  }}
                >
                  {t("refund_policy")}
                </li>
                {showRP && <RefundPolicy closeModal={closeModal} />}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_div">
        <h5>{t("copyright")}</h5>
      </div>
    </>
  );
};

export default Footer;

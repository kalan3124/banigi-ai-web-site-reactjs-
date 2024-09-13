import React from "react";
import modalClose from "../assets/modalClose.png";
import { t } from "i18next";

const TermsAndCondition = ({ closeModal }) => {
  return (
    <>
      <div className="legalModalContainer">
        <div className="legalModalDiv">
          <div className="modalHeader">
            <h3>{t("term_and_condtions")}</h3>
            <img src={modalClose} alt="" onClick={closeModal} />
          </div>

          <div className="modalText">
            <p>{t("term_and_condtions_details")}</p>

            <span>{t("privacypolicy")}</span>

            <p>{t("privacy_policy_details")}</p>

            <span>{t("aiLimitations")}</span>
            <p>{t("aiLimitations_details")}</p>
            <span>{t("user_content")}</span>
            <p>{t("user_content_details")}</p>
            <span>{t("prohibited")}</span>
            <p>{t("prohibited_details")}</p>

            <span>{t("acc_termination")}</span>
            <p>{t("acc_termination_details")}</p>
            <span>{t("limitation_liability")}</span>
            <p>{t("limitation_liability_details")}</p>

            {/* <span>Changes to Terms of Service</span>
            <p>
              BanigiAIretains the right to modify these terms of service at any
              time without priornotice. By continuing to use our website after
              such changes, you acknowledgeand agree to be bound by the revised
              terms. It is your responsibility toperiodically review these terms
              for updates.
            </p> */}

            <span>{t("govering_low")}</span>
            <p>{t("govering_low_details")}</p>

            {/* <span>EntireAgreement</span>
            <p>
              Theseterms of service constitute the entire agreement between you
              and BanigiAIregarding the use of our website. By using BanigiAI,
              you acknowledge that youhave read, understood, and agree to be
              bound by these terms.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;

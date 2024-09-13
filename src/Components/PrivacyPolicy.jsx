import React from 'react'
import modalClose from "../assets/modalClose.png"
import { t } from 'i18next'

const PrivacyPolicy = ({ closeModal }) => {
  return (
    <>
      <div className="legalModalContainer">

        <div className="legalModalDiv">


          <div className="modalHeader">
            <h3>{t("privacy_and_policy")}</h3>
            <img src={modalClose} alt="" onClick={closeModal} />
          </div>

          <div className="modalText">
            <p>
              {/* At BanigiAI, protecting our users privacy is a top priority. We are committed to ensuring the confidentiality and security of your personal information. This privacy policy outlines our practices concerning the collection, use, and sharing of personal information through our website and mobile application.
              Information We Collect */}
              {t("privacy_and_policy_details_1")}
            </p>

            <span className='policySubHeading'>{t("use_of_personal_info")}</span>

            <p>{t("use_of_personal_info_details")}
            </p>

            <span className='policySubHeading'>{t("security_of_personal_info")}</span>
            <p>{t("security_of_personal_info_details")}
            </p>
            <span className='policySubHeading'>{t("link_of_other_web")}
            </span>
            <p>{t("link_of_other_web_details")}
            </p>
            <span className='policySubHeading'>{t("change_privacy_policy")}
            </span>
            <p>{t("change_privacy_policy_details")}
            </p>
            <span className='policySubHeading'>
              {t("contact_us")}
            </span>
            <p>{t("contact_us_details")}
            </p>
          </div>


        </div>

      </div>

    </>
  )
}

export default PrivacyPolicy

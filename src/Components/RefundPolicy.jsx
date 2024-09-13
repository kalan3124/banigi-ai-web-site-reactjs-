import React from 'react'
import modalClose from "../assets/modalClose.png"
import { t } from 'i18next'

const RefundPolicy = ({closeModal}) => {
  return (
    <>
      <div className="legalModalContainer">

        <div className="legalModalDiv">


          <div className="modalHeader">
            <h3>{t("refund_policy")}</h3>
            <img src={modalClose} alt="" onClick={closeModal} />
          </div>

          <div className="modalText">
            <p>{t("refund_policy_details")}

            </p>

            <span className='policySubHeading'>{t("refund_exceptions")}
            </span>

            <p>{t("refund_exceptions_details")}

            </p>

            <span className='policySubHeading'>{t("change_refund")}

            </span>
            <p>{t("change_refund_details")}

            </p>
           
          </div>


        </div>

      </div>

    </>
  )
}

export default RefundPolicy

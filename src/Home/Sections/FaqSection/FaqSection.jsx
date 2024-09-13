import React, { useState } from "react";
import FaqCard from "../../../Components/FaqCard";
import { t } from "i18next";
let lang = localStorage.getItem("lang");

const FaqSection = () => {
  const [seeMore, setSeeMore] = useState(false);

  const questions = [
    {
      title: t("faq_can_i_use_banigi_ai_for_free"),
      content: t("faq_can_i_use_banigi_ai_for_free_answer"),
    },
    {
      title: t("faq_how_does_banigi_ai_work"),
      content: t("faq_how_does_banigi_ai_work_answer"),
    },
    {
      title: t("faq_what_types_of_designs_can_banigi_ai_create"),
      content: t("faq_what_types_of_designs_can_banigi_ai_create_answer"),
    },
    {
      title: t("faq_can_custom_designs_on_banigi_ai"),
      content: t("faq_can_custom_designs_on_banigi_ai_answer"),
    },
    {
      title: t("faq_what_is_ai_intervention"),
      content: t("faq_what_is_ai_intervention_answer"),
    },
    {
      title: t("faq_how_many_design_styles_are_available"),
      content: t("faq_how_many_design_styles_are_available_answer"),
    },
    {
      title: t("faq_in_how_many_countries_is_banigi_ai_used"),
      content: t("faq_in_how_many_countries_is_banigi_ai_used_answer"),
    },
    {
      title: t("faq_how_do_i_contact_customer_support"),
      content: t("faq_how_do_i_contact_customer_support_answer"),
    },
    {
      title: t("faq_what_is_the_refund_policy"),
      content: t("faq_what_is_the_refund_policy_answer"),
    },
  ];
  return (
    <>
      <div className="faqDiv" id="faq">
        <h3>
        {lang === 'vt' 
          ? <><span>{t('questions')}</span> {t('frequently_asked')}</>
          : <>{t('frequently_asked')} <span>{t('questions')}</span></>
        }
         
        </h3>
        {seeMore ? (
          <div className="faqList">
            {questions.map(({ title, content }) => (
              <FaqCard key={title} title={title} content={content} />
            ))}
          </div>
        ) : (
          <div className="faqList">
            {questions.slice(0, 5).map(({ title, content }) => (
              <FaqCard key={title} title={title} content={content} />
            ))}
          </div>
        )}
        <h6
          className="seeMoreBtn"
          onClick={() => {
            setSeeMore(!seeMore);
          }}
        >
          {seeMore ? "See less" : "See More"}
        </h6>
      </div>
    </>
  );
};

export default FaqSection;

import React from "react";
import job1 from "../../../assets/construction.png";
import landscapeImage from "../../../assets/landscape.jpeg";
import airbnbImage from "../../../assets/abnb.png";
import job4 from "../../../assets/architechdesign.png";
import job5 from "../../../assets/interiordesign.png";
import job6 from "../../../assets/agent.png";
import { t } from "i18next";
const BuildJob = () => {
  return (
    <>
      <div className="buildJobDiv">
        <h3>
          {t("build_your")} <span>{t("job")}</span> {t("with_banigi")}
        </h3>
        <div className="top-down-img">
          <div className="first_job_Card">
            <img src={job1} alt="" />
            <div className="job_card_text">
              <p>{t("built_your_construction_builders_1")}</p>
              <p>
                {t("built_your_construction_builders_2")} <br />
                <br />
                {t("built_your_construction_builders_3")}
              </p>
              <svg
                width="50"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="first_job_Card">
            <img src={landscapeImage} alt="" />
            <div className="job_card_text">
              <p>{t("built_your_land_inter_1")}</p>
              <p>
                {t("built_your_land_inter_2")} <br />
                <br />
                {t("built_your_land_inter_3")}
              </p>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="first_job_Card">
            <img src={airbnbImage} alt="" />
            <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            <div className="job_card_text">
              <p>{t("built_your_air_bnb_1")}</p>
              <p>{t("built_your_air_bnb_2")}</p>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="first_job_Card">
            <img src={job4} alt="" />
            <div className="job_card_text">
              <p>{t("built_your_realtors_1")}</p>
              <p>
                {t("built_your_realtors_2")} <br />
                <br />
                {t("built_your_realtors_3")}
              </p>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="first_job_Card">
            <img src={job5} alt="" />
            <div className="job_card_text">
              <p>{t("built_your_archi_1")}</p>
              <p>
                {t("built_your_archi_2")} <br />
                <br />
                {t("built_your_archi_3")}
              </p>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="first_job_Card">
            <img src={job6} alt="" />
            
            <div className="job_card_text">
              <p>{t("for_home_owners_1")}</p>
              <p>
                {t("for_home_owners_2")} <br />
                <br />
                {t("for_home_owners_3")}
              </p>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.4101"
                  y="0.807315"
                  width="39.18"
                  height="39.18"
                  rx="19.59"
                  stroke="#C79952"
                  strokeWidth="1.62"
                />
                <path
                  d="M17.0635 23.6611L24.4272 16.2975"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1257 16.2722H24.5034V21.6498"
                  stroke="#C79952"
                  strokeWidth="1.62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="top-down-img">
          
        
        
        </div>
      </div>
    </>
  );
};

export default BuildJob;

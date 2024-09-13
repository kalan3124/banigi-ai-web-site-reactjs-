import React from "react";
import PrimaryButton from "./PrimaryButton";
import { t } from "i18next";
import {
  STRIP_BUSINESS_PACK,
  STRIP_PARTNER_PACK,
  STRIP_PUBLIC_KEY,
  STRIP_URL,
} from "../constants/config";
import { loadStripe } from "@stripe/stripe-js";
import { stripPayment } from "../apis/usersApis";

const PricingCard = ({
  heading,
  color,
  price,
  features = [],
  classBtn,
  handlePack,
}) => {
  const handlePrice = async () => {
    handlePack();
  };
  return (
    <>
      <div className="pricingCardDiv">
        <span className="pc_heading">{heading}</span>
        <span className="pc_price">{price}</span>
        <div className="pricingCardList">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.69251 15.5233L3.48751 10.3183C3.20704 10.0378 2.82665 9.88027 2.43001 9.88027C2.03337 9.88027 1.65298 10.0378 1.37251 10.3183C1.09204 10.5988 0.934479 10.9792 0.934479 11.3758C0.934479 11.5722 0.973162 11.7667 1.04832 11.9481C1.12348 12.1296 1.23364 12.2944 1.37251 12.4333L7.64251 18.7033C8.22751 19.2883 9.17251 19.2883 9.75751 18.7033L25.6275 2.8333C25.908 2.55284 26.0655 2.17244 26.0655 1.7758C26.0655 1.37917 25.908 0.998771 25.6275 0.718305C25.347 0.437838 24.9666 0.280273 24.57 0.280273C24.1734 0.280273 23.793 0.437838 23.5125 0.718305L8.69251 15.5233Z"
                    fill="#C79952"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <PrimaryButton
          text={t("activate")}
          classBtn={classBtn}
          onClick={() => handlePrice()}
        />
      </div>
    </>
  );
};

export default PricingCard;

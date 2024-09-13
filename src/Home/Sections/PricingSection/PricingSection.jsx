import { t } from "i18next";
import PricingCard from "../../../Components/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import { stripPayment } from "../../../apis/usersApis";
import {
  BUSINESS,
  BUSINESS_CREDITS,
  PARTNER,
  PARTNER_CREDITS,
  START_UP,
  START_UP_CREDITS,
  STRIP_BUSINESS_PACK,
  STRIP_PARTNER_PACK,
  STRIP_PUBLIC_KEY,
  STRIP_START_UP_PACK,
} from "../../../constants/config";
import checkAuth from "../../../auth/CheckAuth";

const PricingSection = (props) =>  {
  const { authData } = checkAuth();
  const handlePack = async (pack_id, pack_name, price, credits) => {
    if (!authData.uid) {
      props.openLogin(true);
      
      return 0;
    }
    localStorage.removeItem("pack_details");
    const cus_id = localStorage.getItem("stripeCustomerId");

    const stripe = await loadStripe(STRIP_PUBLIC_KEY);
    const response = await stripPayment(cus_id, pack_id);

    const session = await response;

    if (session) {
      localStorage.setItem(
        "pack_details",
        JSON.stringify({
          pack_name: pack_name,
          price: price,
          cus_id: cus_id,
          email: authData.email,
          credits: credits,
        })
      );
    }

    localStorage.setItem("cus_session_id", session.id);
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };
  // https://bangi-ai-frontend.vercel.app/successcs_test_a1S7mlXblx6Iz5S8AlfOsNazqdvNmQYBk3kiaTvdu1DPXdNLERsGF5eDes
  // http://localhost:5173/successcs_test_a1S7mlXblx6Iz5S8AlfOsNazqdvNmQYBk3kiaTvdu1DPXdNLERsGF5eDes

  const personal_features = [
    t("business_pack_option_1"),
    t("business_pack_option_2"),
    t("business_pack_option_3"),
    t("business_pack_option_4"),
    t("business_pack_option_5"),
  ];
  const startup_features = [
    t("start_up_pack_option_1"),
    t("start_up_pack_option_2"),
    t("start_up_pack_option_3"),
    t("start_up_pack_option_4"),
    t("start_up_pack_option_5"),
  ];
  const growth_features = [
    t("partner_pack_option_1"),
    t("partner_pack_option_2"),
    t("partner_pack_option_3"),
    t("partner_pack_option_4"),
    t("partner_pack_option_5"),
  ];
  return (
    <>
      <div className="pricing_section" id="pricing">
        <div className="pricingDiv">
          <div className="pricing_header">
            <h3>{t("pricing")}</h3>
            <p>{t("personal_plan_description")}</p>
          </div>

          <div className="pricing_bottom">
            <PricingCard
              heading={t("business_pack_name")}
              price={t("business_pack_price")}
              features={personal_features}
              classBtn="secondary_btn"
              handlePack={() =>
                handlePack(
                  STRIP_BUSINESS_PACK,
                  "business",
                  BUSINESS,
                  BUSINESS_CREDITS
                )
              }
            />
            <PricingCard
              heading={t("start_up_pack_name")}
              price={t("start_up_pack_price")}
              features={startup_features}
              classBtn="primary_btn"
              handlePack={() =>
                handlePack(
                  STRIP_START_UP_PACK,
                  "start-up",
                  START_UP,
                  START_UP_CREDITS
                )
              }
            />
            <PricingCard
              heading={t("partner_pack_name")}
              price={t("partner_pack_price")}
              features={growth_features}
              classBtn="secondary_btn"
              handlePack={() =>
                handlePack(
                  STRIP_PARTNER_PACK,
                  "partner",
                  PARTNER,
                  PARTNER_CREDITS
                )
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;

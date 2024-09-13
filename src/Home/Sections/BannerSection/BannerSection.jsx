import watchIcon from "../../../assets/watch_icon.png";
import BannerCard from "../../../Components/BannerCard";
import vector from "../../../assets/vector.png";
import { t } from "i18next";
import {
  useLocation,
} from "react-router-dom";

const BannerSection = () => {
  const urlCheck = useLocation();
  return (
    <>
      <div className="main_banner" id="main_banner">
        <div className="main_banner_div">
          <div className="banner_left">
            <div className="banner_left_text">
              <h1>
                {t("turn_your_home")}{" "}
                <span className="vector_img">
                  <img src={vector} alt="" className="vector_icon" />{" "}
                  <span className="ani_text"></span>{" "}
                </span>{" "}
                <br />
                {t("design_with_one_click")} <br /> Banigi <span>AI</span>{" "}
                {t("technology")}
              </h1>
              <p>{t("transform_your_home_effortlessly")}</p>
              <div className="banner_left_btn">
                <button className="tryBtn">
                <a
                  href="#pricing"
                  className={
                    urlCheck.hash === "#pricing" ? "active_navLink" : ""
                  }
                >
                  {t('try_banigi_ai_free')}</a></button>
                <button className="watchBtn">
                  <img src={watchIcon} alt="Watch" /> {t('how_does_it_work')}
                </button>
              </div>
            </div>
            <style>
        {`
          :root {
            --text1: "${t('interior')}";
            --text2: "${t('exterior')}";
            --text3: "${t('landscape')}";
            --text4: "${t('custom')}";
            
          }
        `}
      </style>
          </div>
          {/* <div className="banner_right">
                        <div className="banner_right_div">
                            <BannerCard heading="Interior" text="Redesign interior like living rooms, bedroom, kitchen and more" />
                            <BannerCard  heading="Exterior" text="Redesign exterior like house fronts, patio, pools and gardens." style={{backgroundColor:'#C79952'}}/>
                            <BannerCard heading="Landscape" text="Redesign landscape like lawns, pathway and natural features." />
                            <BannerCard heading="Custom" text="Redesign custom like lawns , pathway and natural features." />
                        </div>



                    </div> */}
        </div>
       
      </div>
    </>
  );
};

export default BannerSection;

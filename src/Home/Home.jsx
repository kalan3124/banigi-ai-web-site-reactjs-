import React, { useState } from "react";
import BannerSection from "./Sections/BannerSection/BannerSection";
import HowItWorkSection from "./Sections/HowItWorkSection/HowItWorkSection";
import DesignGrid from "./Sections/DesignGrid/DesignGrid";
import Feedback from "./Sections/Feedback/Feedback";
import DownloadApp from "./Sections/DownloadApp/DownloadApp";
import PricingSection from "./Sections/PricingSection/PricingSection";
import ContactUs from "./Sections/ContactUs/ContactUs";
import FaqSection from "./Sections/FaqSection/FaqSection";
import TryBanigiAi from "./Sections/TryBanigiAi/TryBanigiAi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BuildJob from "./Sections/buildJob/BuildJob";
import checkAuth from "../auth/CheckAuth";
import uk from "../assets/uk.png";
import vt from "../assets/vt.png";
import sp from "../assets/sp.png";

const Home = () => {
  // const { authData } = checkAuth();
  const [loader, setLoader] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  const [langPop, setLangPopClose] = useState("visible");
  let lang = localStorage.getItem("lang");
  let langSelected = localStorage.getItem("lang_selected");

  const manageLoader = (status) => {
    setLoader(status);
  };

  const openLogin = (status) => {
    setNewOpen(status);
  };
  // console.log({
  //   uid:authData.uid,
  //   email:authData.email,
  // });
  // console.log(langSelected);

  const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    localStorage.setItem("lang_selected", "selected");
    window.location.reload();
  };

  const returnLangPop = () => {
    return (
      <div
        id="popup1"
        className="overlay"
        style={{ visibility: langSelected !== "selected" ? langPop : "hidden" }}
      >
        <div className="popup">
          <label htmlFor="" style={{ fontSize: "15px" }}>
            Choose Your Language
          </label>
          <div>
            <a
              className="close"
              href="#"
              onClick={() => {
                // alert()
                setLangPopClose("hidden");
              }}
            >
              &times;
            </a>
          </div>
          <div className="content" style={{ marginTop: "7px" }}>
            <div>
              <button
                className={
                  lang == "en" ? "lang-button lang-active" : "lang-button"
                }
                onClick={() => changeLang("en")}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ marginRight: "7px" }}>English</span>{" "}
                  <img src={uk} alt="" style={{ width: "20px" }} />
                </div>
              </button>
              <button
                className={
                  lang == "vt" ? "lang-button lang-active" : "lang-button"
                }
                onClick={() => changeLang("vt")}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ marginRight: "7px" }}>Vietnam</span>{" "}
                  <img src={vt} alt="" style={{ width: "20px" }} />
                </div>
              </button>
              <button
                className={
                  lang == "sp" ? "lang-button lang-active" : "lang-button"
                }
                onClick={() => changeLang("sp")}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ marginRight: "7px" }}>Mexico</span>{" "}
                  <img src={sp} alt="" style={{ width: "20px" }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {loader ? (
        <div className="loading-state">
          <div className="loading"></div>
        </div>
      ) : null}
      {returnLangPop()}
      <Header
        manageLoader={manageLoader}
        newOpen={newOpen}
        openLogin={openLogin}
      />
      <BannerSection />
      {/* <HowItWorkSection/> */}
      <TryBanigiAi manageLoader={manageLoader} openLogin={openLogin} />

      <DesignGrid manageLoader={manageLoader} />
      <BuildJob />
      <Feedback />
      {/* <DownloadApp /> */}
      <PricingSection openLogin={openLogin} manageLoader={manageLoader} />

      <FaqSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

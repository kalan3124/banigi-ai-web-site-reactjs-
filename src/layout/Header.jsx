import React, { useState } from "react";
import logo from "../assets/logo.png";
import mobileMenu from "../assets/mobileMenu.png";
import LoginModal from "../Components/LoginModal";
import SignupModal from "../Components/SignupModal";
import ForgotPasswordModal from "../Components/ForgotPasswordModal";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import checkAuth from "../auth/CheckAuth";
import ReactSelect from "react-select";
import customStyles from "../Components/selectCustomStyle";
import { t } from "i18next";
import uk from "../assets/uk.png";
import vt from "../assets/vt.png";
import sp from "../assets/sp.png";

const Header = (props) => {
  const { authData } = checkAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showForgotPasswordModal,setshowForgotPasswordModal ] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navigate = useNavigate();
  let lang = localStorage.getItem("lang");
  // console.log(authData.uid);
  const urlCheck = useLocation();
  const openLoginModal = () => {
    setShowSignupModal(false);
    setshowForgotPasswordModal(false);
    setShowLoginModal(true);
  };
  const openSignupModal = () => {
    setShowLoginModal(false);
    setshowForgotPasswordModal(false);
    setShowSignupModal(true);
  };
  const openForgotPasswordModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setshowForgotPasswordModal(true);
  };
  const closeModal = () => {
    // console.log("close");
    props.openLogin(false);
    setShowLoginModal(false);
    setShowSignupModal(false);
    setshowForgotPasswordModal(false);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        location.reload();
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const onChangeLang = (lang) => {
    // console.log(e.target.value);
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav_logo">
            <img src={logo} alt="Banigi Ai" />
          </div>

          <div className="nav_links">
            <ul>
              <Scrollspy
                items={[
                  "main_banner",
                  "howItWork",
                  "feedback",
                  "pricing",
                  "contact_us",
                ]}
                currentClassName="active_navLink"
              >
                <a
                  href="#main_banner"
                  className={
                    urlCheck.hash === "" || urlCheck.hash === "#main_banner"
                      ? "active_navLink"
                      : ""
                  }
                >
                  <li>{t("home")}</li>
                </a>

                {/* <a
                  href="#howItWork"
                  className={
                    urlCheck.hash === "#howItWork" ? "active_navLink" : ""
                  }
                >
                  <li>{t("how_it_works")}</li>
                </a> */}
                <a
                  href="#design_grid"
                  className={
                    urlCheck.hash === "#design_grid" ? "active_navLink" : ""
                  }
                >
                  <li>{t("service")}</li>
                </a>
                <a
                  href="#pricing"
                  className={
                    urlCheck.hash === "#pricing" ? "active_navLink" : ""
                  }
                >
                  <li>{t("pricing")}</li>
                </a>
                {/* <a
                  href="#faq"
                  className={urlCheck.hash === "#faq" ? "active_navLink" : ""}
                >
                  <li>{t("faq")}</li>
                </a> */}
                <a
                  href="#contact_us"
                  className={
                    urlCheck.hash === "#contact_us" ? "active_navLink" : ""
                  }
                >
                  <li>{t("contact_us")}</li>
                </a>
                <span> </span>
              </Scrollspy>
            </ul>
          </div>

          <div className="nav_button">
            {/* <select
              className="lang-select"
              name=""
              id=""
              onChange={(e) => onChangeLang(e)}
            >
              <option value="en" selected={lang == "en"}>
                English
              </option>
              <option value="vt" selected={lang == "vt"}>
                Vietnam
              </option>
            </select> */}
            <div className="dropdown">
              <div style={{ display: "flex" }}>
                <button className="dropbtn" style={{ marginRight: "5px" }}>
                  {lang == "en"
                    ? "English"
                    : lang == "vt"
                    ? "Vietnam"
                    : "Mexico"}
                </button>
                {lang == "en" ? (
                  <img src={uk} alt="" style={{ width: "20px" }} />
                ) : lang == "vt" ? (
                  <img src={vt} alt="" style={{ width: "20px" }} />
                ) : (
                  <img src={sp} alt="" style={{ width: "20px" }} />
                )}
              </div>
              <div className="dropdown-content">
                <a href="#" onClick={() => onChangeLang("en")}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>English</span>
                    <img src={uk} alt="" style={{ width: "20px" }} />
                  </div>
                </a>
                <a href="#" onClick={() => onChangeLang("vt")}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Vietnam</span>
                    <img src={vt} alt="" style={{ width: "20px" }} />
                  </div>
                </a>
                <a href="#" onClick={() => onChangeLang("sp")}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Mexico</span>
                    <img src={sp} alt="" style={{ width: "20px" }} />
                  </div>
                </a>
              </div>
            </div>
            {Object.values(authData).length > 0 ? (
              // authData.displayName
              ""
            ) : (
              // console.log("----",Object.values(auth).length),
              <button className="login_btn" onClick={openLoginModal}>
                {t("login")}
              </button>
            )}
            {showLoginModal && (
              <LoginModal
                closeModal={closeModal}
                openSignupModal={openSignupModal}
                openForgotPasswordModal = {openForgotPasswordModal}
                manageLoader={props.manageLoader}
              />
            )}
            {props.newOpen && (
              <LoginModal
                closeModal={closeModal}
                openSignupModal={openSignupModal}
                openForgotPasswordModal = {openForgotPasswordModal}
                manageLoader={props.manageLoader}
              />
            )}
            <button
              className="getStarted_btn"
              onClick={() => navigate("/dashboard/interiorDesign")}
            >
              {t("get_started")}
            </button>
            {showSignupModal && (
              <SignupModal
                closeModal={closeModal}
                openLoginModal={openLoginModal}
                manageLoader={props.manageLoader}
              />
            )}
             {showForgotPasswordModal && (
              <ForgotPasswordModal
                closeModal={closeModal}
                openLoginModal={openLoginModal}
                manageLoader={props.manageLoader}
              />
            )}
            <img
              src={mobileMenu}
              alt=""
              className="mobilemenu"
              onClick={() => {
                setShowMobileNav(!showMobileNav);
              }}
            />
          </div>
        </div>

        {showMobileNav && (
          <div className="mobile_navbar">
            <ul>
              <a
                href="#main_banner"
                className={
                  urlCheck.hash === "#main_banner " && "active_navLink"
                }
              >
                <li>{t("home")}</li>
              </a>

              {/* <a
                href="#howItWork"
                className={urlCheck.hash === "#howItWork" && "active_navLink"}
              >
                <li>{t("how_it_works")}</li>
              </a> */}
              <a
                href="#design_grid"
                className={urlCheck.hash === "#design_grid" && "active_navLink"}
              >
                <li>{t("service")}</li>
              </a>
              <a
                href="#pricing"
                className={urlCheck.hash === "#pricing" && "active_navLink"}
              >
                <li>{t("pricing")}</li>
              </a>
              {/* <a
                href="#faq"
                className={urlCheck.hash === "#faq" && "active_navLink"}
              >
                <li>{t("faq")}</li>
              </a> */}
              <a
                href="#contact_us"
                className={urlCheck.hash === "#contact_us" && "active_navLink"}
              >
                <li>{t("contact_us")}</li>
              </a>
            </ul>
            <button className="login_btn" onClick={openLoginModal}>
              {t("login")}
            </button>
            {showLoginModal && (
              <LoginModal
                closeModal={closeModal}
                openSignupModal={openSignupModal}
                openForgotPasswordModal = {openForgotPasswordModal}
                manageLoader={props.manageLoader}
              />
            )}
            <button
              className="getStarted_btn"
              onClick={() => navigate("/dashboard/interiorDesign")}
            >
              {t("get_started")}
            </button>
            {showSignupModal && (
              <SignupModal
                closeModal={closeModal}
                openLoginModal={openLoginModal}
                manageLoader={props.manageLoader}
              />
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;

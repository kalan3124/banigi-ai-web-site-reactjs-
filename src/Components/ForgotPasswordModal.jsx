import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../assets/loginImg.png";
import loginLogo from "../assets/logo.png";
import PrimaryButton from "./PrimaryButton";
import fbLogin from "../assets/fbLogin.png";
import googleLogin from "../assets/googleLogin.png";
import appleLogin from "../assets/appleLogin.png";
import modalClose from "../assets/modalClose.png";
import eyeOpen from "../assets/eyeOpen.png";
import eyeClose from "../assets/eyeClose.png";
import SignupModal from "../Components/SignupModal";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  browserPopupRedirectResolver,
  signInWithRedirect,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { errorMsg, successMsg } from "../common/alert";
import { createUserSign } from "../apis/usersApis";
import { t } from "i18next";

const ForgotPasswordModal = ({ closeModal, openLoginModal, manageLoader }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  

  const loginUser = (e) => {
    e.preventDefault();
    manageLoader(true);

    if (!email) {
      errorMsg(t("check_user_credentials"));
      manageLoader(false);
      return 0;
    }
    const auth = getAuth();
    sendPasswordResetEmail(auth, email,)
      .then(async (userCredential) => {
        successMsg(t("reset_password"),t("your_password_reset_link_has_been_sent"))
        manageLoader(false);
        
    
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        console.log(errorMessage);
        errorMsg(t("invalid_login_credentials"));
        manageLoader(false);
      });
  };

  return (
    <>
      <div className="ModalContainer">
        <div className="loginModalOverlay">
          <div className="LoginModalContainer">
            <div className="closeIcon">
              <img src={modalClose} onClick={closeModal} alt="" />
            </div>

            <div className="loginModalDiv">
              <div className="LoginLeftDiv">
                <img src={loginImg} alt="" />
              </div>
              <div className="LoginRightDiv">
                <div className="loginLogo">
                  <img src={loginLogo} alt="" />
                </div>
                <p className="login_text">
                  {t("save_time_and_boost")} <span>Banigi AI</span>{" "}
                
                </p>

                <div className="LoginForm">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    

                    <Link to="/dashboard/interiorDesign">
                      <PrimaryButton
                        text={t("Reset Your Password")}
                        onClick={(e) => loginUser(e)}
                      />{" "}
                    </Link>
                  </form>
                </div>
                <span className="loginTextCenter">{t("login_with")}</span>

                <p className="dha_line">
                  <span className="loginTextCenter2">
                    {t("already_have_an_account")}{" "}
                  </span>
                  <span onClick={openLoginModal}>{t("login")}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;

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
} from "firebase/auth";
import { errorMsg } from "../common/alert";
import { createUserSign } from "../apis/usersApis";
import { t } from "i18next";

const LoginModal = ({ closeModal, openSignupModal,openForgotPasswordModal, manageLoader }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeClose);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eyeOpen);
      setType("text");
    } else {
      setIcon(eyeClose);
      setType("password");
    }
  };

  const loginWithFb = () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider,browserPopupRedirectResolver)
      .then(async (result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        let userData = await createUserSign(
          user.uid,
          user.providerData[0].email,
          ""
        );
        localStorage.setItem("stripeCustomerId", userData.stripeCustomerId);
        closeModal();
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {});
  };

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider,browserPopupRedirectResolver)
      .then(async (result) => {
        // The signed-in user info.
        const user = result.user;
        let userData = await createUserSign(user.uid, user.email, "");
        localStorage.setItem("stripeCustomerId", userData.stripeCustomerId);

        closeModal();
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {});
  };

  const loginWithApple = () => {
    const auth = getAuth();
    const provider = new OAuthProvider();
    signInWithPopup(auth, provider,browserPopupRedirectResolver)
      .then(async (result) => {
        // The signed-in user info.
        const user = result.user;
        let userData = await createUserSign(user.uid, user.email, "");
        localStorage.setItem("stripeCustomerId", userData.stripeCustomerId);
        closeModal();
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {});
  };

  const loginUser = (e) => {
    e.preventDefault();
    manageLoader(true);

    if (!email || !password) {
      errorMsg(t("check_user_credentials"));
      manageLoader(false);
      return 0;
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        let userData = await createUserSign(user.uid, user.email, "");
        localStorage.setItem("stripeCustomerId", userData.stripeCustomerId);
        closeModal();
        manageLoader(false);
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {
        const errorCode = error.code;
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
                      placeholder={t("email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="passwordField">
                      <input
                        type={type}
                        name="password"
                        placeholder={t("password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <img
                        src={icon}
                        alt=""
                        onClick={handleToggle}
                        className="eyeIcon"
                      />
                    </div>

                    <span onClick={openForgotPasswordModal}>{t("forgot_password")}</span>

                    <Link to="/dashboard/interiorDesign">
                      <PrimaryButton
                        text={t("login")}
                        onClick={(e) => loginUser(e)}
                      />{" "}
                    </Link>
                  </form>
                </div>
                <span className="loginTextCenter">{t("login_with")}</span>

                <div className="socialLogin">
                  <img src={fbLogin} alt="" onClick={() => loginWithFb()} />
                  <img
                    src={googleLogin}
                    alt=""
                    onClick={() => loginWithGoogle()}
                  />
                  <img
                    src={appleLogin}
                    alt=""
                    onClick={() => loginWithApple()}
                  />
                </div>

                <p className="dha_line">
                  <span className="loginTextCenter2">
                    {t("dont_have_account")}{" "}
                  </span>
                  <span onClick={openSignupModal}> {t("signup")}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

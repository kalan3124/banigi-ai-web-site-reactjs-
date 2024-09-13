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
import { errorMsg } from "../common/alert";
import { createUserSign } from "../apis/usersApis";
import { t } from "i18next";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  browserPopupRedirectResolver,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

const SignupModal = ({ closeModal, openLoginModal, manageLoader }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(eyeClose);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeClose);

  const handleTogglePassword = () => {
    if (passwordType === "password") {
      setPasswordIcon(eyeOpen);
      setPasswordType("text");
    } else {
      setPasswordIcon(eyeClose);
      setPasswordType("password");
    }
  };

  const handleToggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordIcon(eyeOpen);
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordIcon(eyeClose);
      setConfirmPasswordType("password");
    }
  };

  const signUpWithFb = () => {
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

  const signUpWithGoogle = () => {
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

  const signUpWithApple = () => {
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


  const createUser = (e) => {
    e.preventDefault();
    manageLoader(true);
    if (password == Confirmpassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          let userData = await createUserSign(user.uid, email, "");
          localStorage.setItem("stripeCustomerId", userData.stripeCustomerId);
          if (userData) {
            closeModal();
            navigate("/dashboard/interiorDesign");
            manageLoader(false);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          errorMsg(errorCode);
          manageLoader(false);
        });
    } else {
      console.log("password not match");
      manageLoader(false);
      errorMsg(t("password_not_match"));
    }
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
                  {t("register_to_save")} <span>Banigi AI</span>
                </p>

                <div className="LoginForm">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="passwordField">
                      <input
                        type={passwordType}
                        name="password"
                        placeholder={t("password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <img
                        src={passwordIcon}
                        alt=""
                        onClick={handleTogglePassword}
                        className="eyeIcon"
                      />
                    </div>
                    <div className="passwordField">
                      <input
                        type={confirmPasswordType}
                        value={Confirmpassword}
                        placeholder={t("confirm_password")}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <img
                        src={confirmPasswordIcon}
                        alt=""
                        onClick={handleToggleConfirmPassword}
                        className="eyeIcon"
                      />
                    </div>

                    <PrimaryButton
                      onClick={(e) => createUser(e)}
                      text={t("sign_up")}
                    />
                  </form>
                </div>
                <span className="loginTextCenter">{t("sign_up_with")}</span>

                <div className="socialLogin">
                  <img src={fbLogin} alt="" onClick={() => signUpWithFb()}/>
                  <img src={googleLogin} alt="" onClick={() => signUpWithGoogle()}/>
                  <img src={appleLogin} alt="" onClick={() => signUpWithApple()}/>
                </div>

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

export default SignupModal;

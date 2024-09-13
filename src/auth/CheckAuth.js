import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const checkAuth = () => {
  const [authData, setAuthData] = useState({});

  useEffect(() => {
    getAuth().onAuthStateChanged(function (user) {
      if (user) {
        setAuthData(user);
        localStorage.setItem("uid", user.uid);
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return { authData: authData };
};

export default checkAuth;

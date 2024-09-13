import React, { useEffect } from "react";
import cancel from "../assets/cancel.png";

const Cancel = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location = "/";
    }, 3000);
  }, []);
  return (
    <div className="strip-status">
      <div className="card-success">
        <div>
          <img src={cancel} alt="" style={{ width: "50%" }} />
        </div>
        <h1>Payment Cancelled</h1>
      </div>
    </div>
  );
};

export default Cancel;

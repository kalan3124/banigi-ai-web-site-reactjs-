import React, { useEffect } from "react";
import success from "../assets/success.png";
import { checkoutSession, updateUser } from "../apis/usersApis";
import moment from "moment";

const Success = () => {
  useEffect(() => {
    checkOutSession();
  }, []);

  const checkOutSession = async () => {
    const session_id = localStorage.getItem("cus_session_id");
    const uid = localStorage.getItem("uid");
    const pack = JSON.parse(localStorage.getItem("pack_details"));
    const results = await checkoutSession(session_id);
    if (results) {
      const updated = await updateUser(
        uid,
        pack["email"],
        "",
        pack["cus_id"],
        moment().format("YYYY-MM-DD"),
        pack["pack_name"],
        pack['credits'],
        pack["price"],
        results.payment_status,
        results.client_reference_id
      );

      if (updated) {
        localStorage.removeItem("pack_details");
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      }
    }
    // console.log(results);
  };
  return (
    <div className="strip-status">
      <div className="card-success">
        <div
        //   style={{ margin: "0 auto" }}
        //   style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;"
        >
          <img src={success} alt="" style={{ width: "20%" }} />
        </div>
        <h1>Payment Successfull</h1>
        {/* <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p> */}
      </div>
    </div>
  );
};

export default Success;

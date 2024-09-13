import axios from "axios";
import { API_BASE_URL, BACKEND_API_URL } from "../constants/config";
import { errorMsg } from "../common/alert";

const base_url = BACKEND_API_URL;
const headers = {
  "content-type": "application/json",
  //   "api-key": API_KEY,
};

export const saveMainUploadImage = (props, uid, jobId, url) => {
  return axios
    .post(
      `${base_url}/api/images/uploaded`,
      {
        uid: uid,
        jobId: jobId,
        imageUrl: url,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      console.log(error);
      errorMsg("Something went wrong with api..!");
    });
};

export const saveGeneratedImage = (
  props,
  uid,
  jobId,
  urls,
  category = "",
  type = "",
  model = "",
  style = "",
  color = "",
  number_of_designs = 1,
  ai_invention = "",
  pathway = "",
  plants = "",
  additional_prompt = ""
) => {
  return axios
    .post(
      `${base_url}/api/images/generated`,
      {
        uid: uid,
        jobId: jobId,
        imageUrl: urls,
        category: category,
        type: type,
        model: model,
        style: style,
        color: color,
        number_of_designs: number_of_designs,
        ai_invention: ai_invention,
        pathway: pathway,
        plants: plants,
        additional_prompt: additional_prompt,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const createUserSign = (uid, email, userName) => {
  return axios
    .post(
      `${base_url}/auth/signup`,
      {
        uid: uid,
        email: email,
        userName: userName,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      // props.manageLoader(false);
      // errorMsg("Duplicate entry");
      console.log(error);
    });
};

export const getMainImage = (props, uid) => {
  return axios
    .get(`${base_url}/api/images/uploaded/${uid}`, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getGeneratedImages = (props, uid) => {
  return axios
    .get(`${base_url}/api/images/generated/${uid}`, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getJobUid = (props, uid, jobId) => {
  return axios
    .get(`${base_url}/api/images/jobUser?uid=${uid}&jobId=${jobId}`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getAllImages = (props) => {
  return axios
    .get(`${base_url}/api/images/all/`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getAllImagesByUid = (setLoader, uid) => {
  return axios
    .get(`${base_url}/api/images/all/byUser/${uid}`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      setLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const stripPayment = (cus_id, price_id) => {
  return axios
    .post(
      `${base_url}/payment/create-checkout-session`,
      {
        stripeCustomerId: cus_id,
        priceId: price_id,
      },
      {
        headers,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // setLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const checkoutSession = (sessionid) => {
  return axios
    .get(`${base_url}/payment/checkout-session?sessionId=${sessionid}`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      setLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const updateUser = (
  uid,
  email,
  user_name,
  stripeCustomerId,
  subscription_date,
  package_name,
  available_token,
  package_total,
  payment_status,
  client_reference_id
) => {
  return axios
    .post(
      `${base_url}/auth/update-user`,
      {
        uid: uid,
        email: email,
        userName: "",
        stripeCustomerId: stripeCustomerId,
        subscription_date: subscription_date,
        package_name: package_name,
        available_token: available_token,
        package_total: package_total,
        payment_status: payment_status,
        client_reference_id: client_reference_id,
      },
      {
        headers,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // setLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getUserByID = (uid) => {
  return axios
    .get(`${base_url}/auth/get-user?uid=${uid}`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      setLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

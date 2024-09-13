import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants/config";
import Swal from "sweetalert2";

// https://cdn.reimaginehome.ai/prod/gen/b5d55b57-9d9b-4b29-84f9-f8dba3ed12d6.png
// https://cdn.reimaginehome.ai/prod/gen/b5d55b57-9d9b-4b29-84f9-f8dba3ed12d6.png

const base_url = API_BASE_URL;
const headers = {
  "content-type": "application/json",
  "api-key": API_KEY,
};

export const createMask = (props, url) => {
  return axios
    .post(
      `${base_url}/v1/create_mask`,
      {
        image_url: `${url}`,
        webhook_url: "",
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getMask = (props, job_id) => {
  return axios
    .get(`${base_url}/v1/create_mask/${job_id}`, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const generateImage = (
  props,
  category,
  url,
  masksArr,
  type,
  style,
  color,
  no,
  pathAndpalnt = "",
  addtional_pro
) => {
  let data = {};

  if (category == "interior") {
    console.log("interior");
    data = {
      image_url: `${url}`,
      mask_urls: masksArr,
      mask_category: "furnishing",
      space_type: type,
      design_theme: style,
      masking_element: "Wall",
      color_preference: color,
      material_preference: "",
      landscaping_preference: "",
      generation_count: no,
      additional_prompt: addtional_pro,
      webhook_url: "",
    };
  }

  // if (category == "exterior") {
  //   console.log("exterior");
  //   data = {
  //     image_url: `${url}`,
  //     mask_urls: masksArr,
  //     mask_category: "landscaping",
  //     space_type: type,
  //     design_theme: style,
  //     masking_element: "",
  //     color_preference: "",
  //     material_preference: "",
  //     landscaping_preference: "",
  //     generation_count: no,
  //     additional_prompt: addtional_pro,
  //     webhook_url: "",
  //   };
  // }

  if (category == "landscaping") {
    console.log("landscaping");
    data = {
      image_url: `${url}`,
      mask_urls: masksArr,
      mask_category: "landscaping",
      space_type: type,
      design_theme: style,
      masking_element: "",
      color_preference: "",
      material_preference: "",
      landscaping_preference: pathAndpalnt,
      generation_count: no,
      additional_prompt: addtional_pro,
      webhook_url: "",
    };
  }

  if (category == "custom") {
    console.log("custom");
    data = {
      image_url: `${url}`,
      mask_urls: masksArr,
      mask_category: "furnishing",
      space_type: type,
      design_theme: style,
      masking_element: "Wall",
      color_preference: "",
      material_preference: "",
      landscaping_preference: "",
      generation_count: no,
      additional_prompt: addtional_pro,
      webhook_url: "",
    };
  }

  return axios
    .post(`${base_url}/v1/generate_image`, data, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const generateImageCustom = (
  props,
  category,
  url,
  masksArr,
  type,
  style,
  maskingElement = "",
  color = "",
  no,
  pathAndpalnt = "",
  materialPreference = "",
  addtional_pro
) => {
  let data = {
    image_url: `${url}`,
    mask_urls: masksArr,
    mask_category: category,
    space_type: type,
    design_theme: style,
    masking_element: maskingElement,
    color_preference: color,
    material_preference: materialPreference,
    landscaping_preference: pathAndpalnt,
    generation_count: no,
    additional_prompt: addtional_pro,
    webhook_url: "",
  };

  console.log(data);

  return axios
    .post(`${base_url}/v1/generate_image`, data, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getGeneratedImage = (props, job_id) => {
  return axios
    .get(`${base_url}/v1/generate_image/${job_id}`, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

const errorMsg = (msg) => {
  Swal.fire({
    title: "",
    text: msg,
    icon: "error",
    confirmButtonText: "OK",
    color: "red",
    width: "20rem",
    heightAuto: true,
    confirmButtonColor: "red",
    background: "antiquewhite",
  });
};

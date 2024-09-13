import axios from "axios";

const base_url = "https://api.reimaginehome.ai";
const headers = {
  "content-type": "application/json",
  "api-key": "66530f6dbfb09206e0f67369",
};

export const getSpaceTypes = () => {
  return axios
    .get(`${base_url}/v1/get-space-type-list`, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};

export const getThemeList = () => {
  return axios
    .get(`${base_url}/v1/get-design-theme-list`, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};

export const getColorPreferenceList = () => {
  return axios
    .get(`${base_url}/v1/get-color-preference-list`, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};

export const getLanscapingPreferenceList = () => {
  return axios
    .get(`${base_url}/v1/get-landscaping-preference-list`, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};

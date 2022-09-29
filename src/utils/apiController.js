import axios from "axios";
const BASE_URL = "https://dev.gateway.himedi.com/test";
const timezoneOffset = new Date().getTimezoneOffset();

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Time-Zone": timezoneOffset,
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    console.log("request err", err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (res) {
    console.log("response res", res.data);
    return res;
  },
  function (err) {
    console.log("response err", err);
    return Promise.reject(err);
  }
);

export default instance;

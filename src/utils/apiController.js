import axios from "axios";
const PROXY_API = "/api";
const BASE_URL = "https://dev.gateway.himedi.com";
const timezoneOffset = new Date().getTimezoneOffset();

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Time-Zone": timezoneOffset,
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("request err", err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    console.log("response", res.data);
    return res;
  },
  (err) => {
    console.log("response", err);
    return Promise.reject(err);
  }
);

export { instance };

const proxyInstance = axios.create({
  baseURL: PROXY_API,
  withCredentials: true,
  headers: {
    "Time-Zone": timezoneOffset,
  },
});

proxyInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("request err", err);
    return Promise.reject(err);
  }
);

proxyInstance.interceptors.response.use(
  (res) => {
    console.log("response", res.data);
    return res;
  },
  (err) => {
    console.log("response", err);
    return Promise.reject(err);
  }
);

export { proxyInstance };

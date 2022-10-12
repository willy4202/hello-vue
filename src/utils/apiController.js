import axios from "axios";
const PROXY_API = "/api";
const BASE_URL = "https://dev.gateway.himedi.com";
const timezoneOffset = new Date().getTimezoneOffset();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Time-Zone": timezoneOffset,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const axiosProxyInstnace = axios.create({
  baseURL: PROXY_API,
  withCredentials: true,
  headers: {
    "Time-Zone": timezoneOffset,
  },
});

axiosProxyInstnace.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosProxyInstnace.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { axiosProxyInstnace, axiosInstance };

const fetchInstnace = async (params, method) => {
  return await fetch(BASE_URL + params, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Time-Zone": timezoneOffset,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const fetchProxyInstnace = async (params, method) => {
  return await fetch(PROXY_API + params, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Time-Zone": timezoneOffset,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export { fetchInstnace, fetchProxyInstnace };

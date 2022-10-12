import axios from "axios";
const PROXY_API = "/api";
const BASE_URL = "https://dev.gateway.himedi.com";
const option = {
  headers: {
    "Content-Type": "application/json",
    "Time-Zone": new Date().getTimezoneOffset(),
  },
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  ...option,
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
    console.log("interceptors res", res.data);
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const axiosProxyInstnace = axios.create({
  baseURL: PROXY_API,
  withCredentials: true,
  ...option,
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
    console.log("interceptors res", res.data);
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { axiosProxyInstnace, axiosInstance };

const fetchInstnace = async (params, method) => {
  const res = await fetch(BASE_URL + params, {
    method: method,
    ...option,
  });
  const data = await res.json();
  if (res.ok) {
    console.log(data);
  } else {
    throw Error(data);
  }
};

const fetchProxyInstnace = async (params, method) => {
  const res = await fetch(PROXY_API + params, {
    method: method,
    ...option,
  });
  const data = await res.json();
  if (res.ok) {
    console.log(data);
  } else {
    throw Error(data);
  }
};

export { fetchInstnace, fetchProxyInstnace };

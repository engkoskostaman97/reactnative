import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.kontenbase.com/query/api/v1/c69a3570-67bf-4476-882f-3bf7c51ab1be/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer $(token)`;
  } else {
    delete API.defaults.headers.common[Authorization];
  }
};
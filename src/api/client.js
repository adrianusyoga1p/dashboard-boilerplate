import { logout } from "@/store/authSlice";
import store from "@/store/store";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = (payload) => {
  return new Promise((resolve, reject) => {
    const baseClient = axios.create({
      baseURL,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    baseClient.interceptors.request.use(
      (config) => {
        const token = store.getState().auth.token;
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    baseClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 400) {
          store.dispatch(logout());
        }
        return Promise.reject(error);
      }
    );

    baseClient(payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) {
          resolve(error.response.data);
        } else {
          reject(error);
        }
      });
  });
};

export default api;

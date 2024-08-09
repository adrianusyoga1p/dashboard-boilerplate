import axios from "axios";
// import { useAuthStore } from '@/stores';

const baseURL = import.meta.env.VITE_API_URL

const useApi = (payload) => {
  return new Promise((resolve, reject) => {
    const baseClient = axios.create({
      baseURL,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    // baseClient.interceptors.request.use((config) => {
    //   const { token } = useAuthStore();
    //   if (token) config.headers.Authorization = `bearer ${token}`;
    //   return config;
    // });

    // baseClient.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     if (error.response && error.response.status == 401) {
    //       useAuthStore().logout()
    //     }
    //     return Promise.reject(error)
    //   },
    // );

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

export default useApi;

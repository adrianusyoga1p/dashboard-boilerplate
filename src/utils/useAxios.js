import api from "@/api/client";

export const useAxios = () => {
  const get = (url, params) => {
    return api({
      method: "GET",
      url: url,
      params,
    });
  };

  const detail = (url, id) => {
    return api({
      method: "GET",
      url: url + id,
    });
  };

  const post = (url, data) => {
    return api({
      method: "POST",
      url: url,
      data,
    });
  };

  const deletes = (url, id) => {
    return api({
      method: "DELETE",
      url: url + id,
    });
  };

  return { get, detail, post, deletes };
};

import api from "../client";

export const apiUsers = (params) => {
  return api({
    method: "GET",
    url: "/users",
    params,
  });
};

export const apiUsersUpdate = (id, data) => {
  return api({
    method: "PUT",
    url: "/users/" + id,
    data,
  });
};

export const apiUserPost = (data) => {
  return api({
    method: "POST",
    url: "users/add",
    data
  })
}

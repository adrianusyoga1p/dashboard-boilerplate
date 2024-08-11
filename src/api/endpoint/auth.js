import api from "../client";

export const apiLogin = (username, password) => {
  return api({
    method: "POST",
    url: "/auth/login",
    data: { username, password },
  });
};

export const apiRefreshToken = (refreshToken) => {
  return api({
    method: "POST",
    url: "/auth/refresh",
    data: { refreshToken },
  });
};

export const apiAuthMe = (params) => {
  return api({
    method: "GET",
    url: "/auth/me",
    params
  })
}
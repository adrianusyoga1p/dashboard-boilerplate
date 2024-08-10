import api from "../client"

export const apiUsers = (params) => {
  return api({
    method: "GET",
    url: "/users",
    params
  })
}
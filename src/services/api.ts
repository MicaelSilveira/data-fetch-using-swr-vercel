import axios from "axios";

const API_S = {
  USER_API: "http://localhost:3333",
  POST_API: "https://jsonplaceholder.typicode.com",
};

export type typeAPI = "USER_API" | "POST_API";

export function api_select(api_name: typeAPI) {
  const axiosRequest = axios.create({
    baseURL: API_S[api_name],
  });
  const baseURL = API_S[api_name];
  return { axiosRequest, baseURL };
}

import axios from "axios";

export default axios.create({
  baseURL: "https://reservely-api-production.up.railway.app/api/v1",
  // withCredentials: true,
  // credentials: "include",
});

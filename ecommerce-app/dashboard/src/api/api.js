import axios from "axios";

const api = axios.create({
  baseURL: "http://locathost:5000/api",
});
export default api;

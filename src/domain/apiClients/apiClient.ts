import axios from "axios";

const localBaseURL = "http://localhost:1240/";

const apiClient = axios.create({
  baseURL: localBaseURL,
  // withCredentials: true,
  // headers: {
  //   'Content-type': 'application/json',
  //   Accept: 'application/json',
  // },
  // Commented out for now as we are not using cors
});

export default apiClient;

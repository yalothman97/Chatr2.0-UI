import axios from "axios";

axios.defaults.baseURL = "https://api-chatr.herokuapp.com";
if (localStorage.getItem("token"))
  axios.defaults.headers.common["Authorization"] =
    "JWT " + localStorage.getItem("token");
else delete axios.defaults.headers.common["Authorization"];

export default function setAuthToken() {
  if (localStorage.getItem("token"))
    axios.defaults.headers.common["Authorization"] =
      "JWT " + localStorage.getItem("token");
  else delete axios.defaults.headers.common["Authorization"];
}

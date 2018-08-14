import axios from "axios";

export default function setAuthToken() {
  if (localStorage.getItem("token")) {
    axios.defaults.headers.common["Authorization"] =
      "JWT " + localStorage.getItem("token");
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

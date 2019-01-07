import axios from "axios";

const instance = axios.create({
  baseURL: "https://myburger-a38a6.firebaseio.com/"
});

export default instance;

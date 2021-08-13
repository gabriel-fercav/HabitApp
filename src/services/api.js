import axios from "axios";

axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
});

export default axios;

import axios from "axios";

export default {
  async authenticate() {
    let response = await axios.get("/auth/");
    return response;
  },
};

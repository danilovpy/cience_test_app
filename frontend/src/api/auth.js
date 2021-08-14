import axios from "axios";

export default {
  async authenticate(token) {
    try {
      let response = await axios.post("/auth/google/", {
        access_token: token,
      });
      if (response.status == 200) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  },
  async getUserData() {
    try {
      let response = await axios.get("/dj-rest-auth/user/");
      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.log(err);
    }
  },
  async logout() {
    try {
      let response = await axios.post("/dj-rest-auth/logout/");
      if (response.status == 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.log(err);
    }
  },
};

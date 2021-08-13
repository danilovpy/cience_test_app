import axios from "axios";

export default {
  async fetchMessages() {
    let response = await axios.get("/messages/");
    return response;
  },
  async sendMessage(message){
    let response = await axios.post("/messages/", {text: message})
    return response
  }
};

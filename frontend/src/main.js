import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GSignInButton from "vue-google-signin-button";
import vuetify from "./plugins/vuetify";
import axios from "axios"
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
let apiClient = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com",
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})

const token = JSON.parse(localStorage.getItem("token"));
if (token) {
   apiClient.defaults.headers.common["Authorization"] = token;  
}

Vue.prototype.$http = apiClient;

Vue.config.productionTip = false;
Vue.use(GSignInButton);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

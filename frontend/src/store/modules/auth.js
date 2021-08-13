import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import auth from "../../api/auth.js";
Vue.use(Vuex);

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const state = {
  authUser: {},
  isAuthenticated: "",
};
const getters = {};
const actions = {
  async authenticate({ commit }) {
    let response = await auth.authenticate();
    if (response.status == 200) {
      console.log("success");
      console.log(response.data)
      commit("setAuthUser", {
        authUser: response.data,
        isAuthenticated: "success",
      });
    }
  },
};
const mutations = {
  setAuthUser(state, { authUser, isAuthenticated }) {
    Vue.set(state, "authUser", authUser);
    Vue.set(state, "isAuthenticated", isAuthenticated);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

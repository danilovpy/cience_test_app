import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const state = {

};
const getters = {};
const actions = {

};
const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations,
};

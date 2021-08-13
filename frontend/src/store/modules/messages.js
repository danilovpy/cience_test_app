import Vue from "vue";
import Vuex from "vuex";
import messages from "../../api/messages.js"

Vue.use(Vuex);

const state = {
  messages:[],
};
const getters = {
  allMessages: (state) => state.messages,
};
const actions = {
  async getMessages({ commit }) {
    let response = await messages.fetchMessages();
    if (response.status == 200) {
      commit("setMessages", {
        messages: response.data,
      });
    }
  },


};
const mutations = {
  setMessages(state ,{messages}){
    Vue.set(state, "messages", messages)
  },

  
};

export default {
  state,
  getters,
  actions,
  mutations,
};

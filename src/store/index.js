import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userDefault = {
  logged: false,
  name: null,
  id: null,
  groups: [],
  avatarLink: null,
  perm: "user",
};

export default new Vuex.Store({
  state: {
    user: userDefault,
    currentGroup: {
      configured: false,
      name: null,
      id: null,
      avatarLink: null,
      group_adminuser: []
    },
  },
  mutations: {
    updateUserData(state, payload) {
      state.user = payload;
    },
    wipeUserData(state) {
      state.user = userDefault;
    },
    switchGroup(state, payload) {
      state.currentGroup = payload;
    },
  },
  actions: {},
  modules: {},
});

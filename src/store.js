import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typeList: ["Baseball", "Football", "BasketBall"],
    name: "",
    list: []
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.list.push(item);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("ADD_ITEM", item);
    }
  },
  getters: {
    typeList: state => state.typeList,
    list: state => state.list
  }
});

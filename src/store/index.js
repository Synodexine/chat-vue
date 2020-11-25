import Vue from 'vue'
import Vuex from 'vuex'
import rooms from './rooms/rooms'
import accounts from './accounts/accounts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    rooms,
    accounts
  },
});

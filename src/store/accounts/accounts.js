import { Accounts } from '../../api/accounts'
import {
  SET_USER_INFO,
  SET_USER_PREFIX
} from './mutation-types.js'


const state= {
    user: {
      info: null,
      sidePanel:{
        currentTab: 0
      }
    }
};
const getters = {
    user: state => {
      return state.user;
    }
};
const mutations = {
    [SET_USER_INFO]: (state, payload) => {
      state.user.info = payload;
    },
    [SET_USER_PREFIX]: (state, payload) => {
      state.user.info = payload;
    }
};
const actions = {
    GET_USER_INFO: async (context) => {
      context.commit('SET_USER_INFO', await Accounts.getUserInfo().then(response => {return response.data}))
    },
    SET_USER_PREFIX: async (context, newPrefix) => {
      Accounts.changePrefix(newPrefix);
      context.commit('SET_USER_INFO', await Accounts.getUserInfo().then(response => {return response.data}))
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};

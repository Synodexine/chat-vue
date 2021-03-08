import { Rooms } from '../../api/rooms'
import {
  SET_ROOMS,
  DELETE_ROOM
} from './mutation-types.js'

const state= {
    rooms: []
};
const getters = {
    rooms: state => {
      return state.rooms;
    }
};
const mutations = {
    [SET_ROOMS]: (state, payload) => {
      state.rooms = payload;
    },
    [DELETE_ROOM]: (state, payload) => {
      state.rooms = payload;
    }
};
const actions = {
    GET_ROOMS: async (context) => {
      context.commit('SET_ROOMS', await Rooms.list())
    },
    DELETE_ROOM: async (context, roomId) => {
      await Rooms.deleteRoom(roomId);
      context.commit('DELETE_ROOM', await Rooms.list())
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { createInstance } from '../api/index.js';
const instance = createInstance();

import opinionStore from './modules/opinionStore';
import clubStore from './modules/clubStore';
import issueStore from './modules/issueStore';

export default new Vuex.Store({
  state: {
    //로그인 정보
    isLoginToken: '',

    // 유저 정보
    userInfo: {
      email: '',
      id: 0,
      nickname: '',
      introduce_text: '',
    },

    //Meun 상태
    drawer: false,
    dialog: false,
  },
  getters: {},
  mutations: {
    //Login
    SET_LOGIN_TOKEN(state, token) {
      state.isLoginToken = token;
      localStorage.setItem('token', token);
    },

    //userInfo
    SET_USER_INFO(state, data) {
      state.userInfo = data;
    },

    //NavBar Modal
    CHANGE_DRAWER(state, drawer) {
      state.drawer = drawer;
    },
    CHANGE_DIALOG(state, dialog) {
      state.dialog = dialog;
    },
  },
  actions: {
    //유저 정보 받아오기
    userData({ commit }, data) {
      console.log('index usderdata ' + data);
      instance
        .post('/accounts/get_user/', { email: data })
        .then((res) => {
          commit('SET_USER_INFO', res.data);
        })
        .catch((err) => console.log(err.response));
    },
    userUpdate({ dispatch }, data) {
      instance
        .post(`/accounts/user_update/`, data)
        .then(() => {
          dispatch('userData', data.email);
        })
        .catch((err) => console.log(err.response));
    },
    //로그아웃
    userLogout({ commit }) {
      commit('SET_LOGIN_TOKEN', '');
      commit('SET_USER_INFO', {});
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    },
  },
  modules: {
    opinionStore: opinionStore,
    clubStore: clubStore,
    issueStore: issueStore,
  },
});

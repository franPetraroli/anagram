import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    searchedWord: null,
    wordArray: [],
    isLoggedIn: false,
    currentUser: null
  },
  mutations: {
    updateWordArray(state, payload) {
      state.wordArray = payload.result
      state.searchedWord = payload.word
      router.push("/result")
    },
    splice(state, index) {
      state.wordArray.splice(index, 1)
    },
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
    currentUser(state, email) {
      state.currentUser = email
    },
    emptyEmail(state) {
      state.currentUser = ''
    }
  },
  actions: {
    login: (context, email) => {
      context.commit('login')
      context.commit('currentUser', email)
    },
    logout: (context) => {
      context.commit('logout')
      context.commit('emptyEmail')
    }
  },
  getters: {
    word: state => {
      return state.searchedWord
    },
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    currentUser: state => {
      return state.currentUser
    },
    wordArray: state => {
      return state.wordArray
    }
  }
});

export default store

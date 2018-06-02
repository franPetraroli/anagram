import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    searched_word: null,
    word_array: null,
    isLoggedIn: false,
    currentUser: null
  },
  mutations: {
    update_word_array(state, word) {
      state.word_array = word
      router.push("/result")
    },
    splice(state, index) {
      state.word_array.splice(index, 1)
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
      console.log(email)
    },
    logout: (context) => {
      context.commit('logout')
      context.commit('emptyEmail')
    }
  },
  getters: {
    word: state => {
      return state.searched_word
    },
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    currentUser: state => {
      return state.currentUser
    }
  }
});

export default store

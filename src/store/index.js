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
    currentUser: null,
    favouriteWords: []
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
    },
    fetchFavourite(state){
      var docRef = db.collection("favourite").doc(state.currentUser);
      docRef.get().then(function (doc) {
        if (doc.exists) {
          state.favouriteWords = doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    },
    resetFavList(state){
      state.favouriteWords = []
    }
  },
  actions: {
    login: (context, email) => {
      context.commit('login')
      context.commit('currentUser', email)
      context.commit('fetchFavourite')
    },
    logout: (context) => {
      context.commit('logout')
      context.commit('emptyEmail')
      context.commit('resetFavList')
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
    },
    favouriteWords: state => {
      return state.favouriteWords
    }
  }
});

export default store

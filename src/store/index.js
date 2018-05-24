import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    searched_word: '',
    word_array: ''
  },
  mutations: {
    update_word_array(state, word) {
      state.word_array = word
      router.push("/result")
    },
    splice(state, index) {
      state.word_array.splice(index, 1)
    }
  },
  actions: {
    calculate: (context) => {

    }
  },
  getters: {
    word: state => {
      return state.searched_word
    }
  }
});


export default store

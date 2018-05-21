import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  
    state:{
        searched_word:'test'
    },
    mutations:{
        calculate(state, word) {
            state.searched_word = word
            router.push("/result")
          }
    },
    actions:{

    },
    getters:{
        word: state => {
            return state.searched_word
          }
    }
});


export default store

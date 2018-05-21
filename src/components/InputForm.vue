<template>
  <div class="field is-grouped">
      <p class="control is-expanded">
          <input class="input" type="text" placeholder="Enter your word" id="word" v-model="word_to_search" keyup.enter="calculate">
      </p>
      <p class="control">
          <a class="button is-info" id="submit" @click="calculate">Submit</a>
      </p>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Input',
  data() {
    return{
      word_to_search: ''
    }
  },
  methods: {
    calculate(){
      store.commit('calculate', this.word_to_search)
    }
  }
}
</script>
<template>
  <div class="field is-grouped">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="Enter your word" id="word" v-model="wordToSearch" keyup.enter="calculate">
    </p>
    <p class="control">
      <a class="button is-info" id="submit" @click="calculate">Submit</a>
    </p>
  </div>
</template>

<script>
import store from "../store";
import generate from "../script";

export default {
  name: "Input",
  data() {
    return {
      wordToSearch: ""
    };
  },
  methods: {
    calculate() {
      var result = generate(this.wordToSearch);
      var word = this.wordToSearch;
      store.commit("updateWordArray", { result, word });
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="card" v-for="item in words" :key="words[item]">
      <h5 class="word">{{ item }}</h5>
      <div class="icons">
        <i class="far fa-star" id="star"></i>
        <i class="far fa-times-circle" id="cross" @click="remove(words.indexOf(item))"></i>
      </div>
    </div>

  </div>
</template>
<script>
import store from "../store";

export default {
  name: "HelloWorld",
  data() {
    return {
      words: store.state.word_array
    };
  },
  methods: {
    remove: itemx => {
      store.commit("splice", itemx);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 20px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.word {
  grid-column: 1 / span 2;
}

.icons {
  justify-self: end;
  align-self: center;
}

#star,
#cross {
  font-size: 18px;
}

#star:hover {
  color: rgb(40, 207, 40);
}

#cross:hover {
  color: red;
}
</style>

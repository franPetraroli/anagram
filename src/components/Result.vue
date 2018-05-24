<template>
  <div class="container">
    <ul>
      <li v-for="item in words" :key="words[item]">
        <div class="item"> 
          {{ item }}
        </div>
        <div class="icons">
          <i class="far fa-star" id="star"></i>
          <i class="far fa-times-circle" id="cross" @click="remove(words.indexOf(item))"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '../store'
  export default {
    name: 'HelloWorld',
    data() {
      return{
        words: store.state.word_array
      }
    },
    methods: {
      remove: (itemx) => {
        store.commit('splice', itemx)
      }
    }
  }

</script>
<style lang="scss" scoped>
  ul {
    margin-top: 60px;
  }

  li {
    float: left;
    width: 8em;
    margin: 10px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  li #star {
    text-align: right;
  }

  li:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .items {
    display: inline;
    width: 3em;
  }

  .icon {
    display: inline;
    width: 3em;
  }

  #star,
  #cross {
    margin-top: 10px;
    font-size: 18px;
  }

  #star:hover {
    color: rgb(40, 207, 40);
  }

  #cross:hover {
    color: red;
  }

</style>

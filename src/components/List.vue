<template>
  <div class="container">
    <h2>These are youre saved words</h2>
    <br>
    <p v-if="!currentUser">You are not logged in</p>
    <div>
      <p v-for="item in favList" :key="item">{{ item }}</p>
    </div>
    <!-- <div v-for="item in words" :key="item">
      <Card class="card" :item="item"></Card>
    </div> -->
  </div>
</template>
<script>
  import store from "../store";
  import db from "../firebase";
  import Card from "./Card"

  export default {
    name: "List",
    // components:{  
    //   Card
    // },
    data() {
      return {
        favList: store.getters.favouriteWords,
        currentUser: store.getters.currentUser
      }
    },
    created: function () {
      var favList = store.getters.favouriteWords
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

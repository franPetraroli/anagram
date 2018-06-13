<template>
  <div>
    <h5 class="word">{{item.word}}</h5>
    <div class="icons">
      <i v-if="!item.isActive" class="far fa-star" @click="save(item)"></i>
      <i v-if="item.isActive" class="fas fa-star" @click="deleteItem(item)"></i>
      <i class="far fa-trash-alt" id="cross" @click="remove(item)"></i>
    </div>

  </div>
</template>
<script>
  import store from "../store";
  import db from "../firebase";
import { firestore } from 'firebase';

  export default {
    name: "Card",
    props: ['item'],
    data() {
      return {
        words: this.$store.getters.wordArray
      };
    },
    methods: {
      remove: function (item) {
        this.$store.commit("splice", this.words.indexOf(item));
      },
      toggle: function (item) {
        item.isActive = !item.isActive
      },
      save: function (item) {
        //if the user has already saved words merge new one in the collection
        if (store.getters.currentUser) {
          this.toggle(item)
          // item.isActive = !item.isActive
          db.collection("favourite")
            .doc(store.getters.currentUser.toString())
            .set({
              [item.word]: item.word
            }, {
              merge: true
            });
        } else {
          //alert
          alert('You are not Logged in.\n\nPlease Sign in or Sign up to save a word')
        }
      },
      deleteItem: function (item) {
        //Delete item from the database
        let toDelete = item.word.toString()
        let user = store.getters.currentUser.toString()
  
        db.collection('favourite').doc(user).update({ [toDelete]: firestore.FieldValue.delete()}).then(this.toggle(item));
      }
    }
  };

</script>
<style lang="scss" scoped>

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

<template>
  <nav class="navbar" role="navigation">
    <h1 class="title"><router-link to="/">ANAGRANMA</router-link></h1>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item is-active">
          <a class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>
          <a class="navbar-item">
            Your List
          </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <a v-show="!isLoggedIn"  class="navbar-item">
          <router-link to="/login">Login</router-link>
        </a>
        <a v-show="!isLoggedIn" class="navbar-item">
          <router-link to="/register">Register</router-link>
        </a>
        <a v-show="isLoggedIn" class="navbar-item" @click="logout">
          Logout
        </a>
        <a v-show="isLoggedIn" class="navbar-item" @click="logout">
          Logged in as {{this.$store.getters.currentUser}}
        </a>
      </div>
  </nav>
</template>

<script>
import firebase from "firebase";
import router from "../router";
import store from "../store";

export default {
  name: "Nav",
  data() {
    return {
      // isLoggedIn: this.$store.getters.isLoggedIn,
      currentUser: this.$store.getters.currentUser
    };
  },
  computed: {
    isLoggedIn: () => {
      return store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: e => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log(this.isLoggedIn);
          store.dispatch("logout");
          router.push("/login");
        });
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 32px !important;
  margin-top: 16px;
}

.navbar-start {
  margin-left: 40px;
}

router-link {
  text-decoration: none;
}
</style>


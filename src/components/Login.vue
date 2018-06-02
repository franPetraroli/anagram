<template>
	<section class="hero is-fullheight is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <article class="card is-rounded">
                <div class="card-content">
                  <h1 class="title">
                       Login            
                  </h1>
                  <p class="control has-icon">
                    <input class="input" type="email" placeholder="Email" v-model="email">
                    <i class="fa fa-envelope"></i>
                  </p>
                  <p class="control has-icon">
                    <input class="input" type="password" placeholder="Password" v-model="passw">
                    <i class="fa fa-lock"></i>
                  </p>
                  <p class="control">
                    <label class="checkbox">
                      <input type="checkbox">
                      Remember me
                    </label>
                  </p>
                  <p class="control">
                    <button class="button is-primary is-medium is-fullwidth" @click="login">
                      <i class="fa fa-user"></i>
                      Login
                    </button>
                  </p>
                </div>
              </article>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      passw: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.passw)
        .then(
          user => {
            this.$store.dispatch("login", this.email);
            alert(`You are logged in as: ${this.email}`);

            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>
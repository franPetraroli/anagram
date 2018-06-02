<template>
  <section class="hero is-fullheight is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <article class="card is-rounded">
            <div class="card-content">
              <form action="register">
                <input type="email" name="email" v-model="email">
                <input type="password" name="passw" v-model="passw">
                <button type="submit" @click="register">Register</button>
              </form>
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
      email: "nino@nino.com",
      passw: ""
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.passw)
        .then(
          user => {
            alert(`Account created with username${this.username}`);
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

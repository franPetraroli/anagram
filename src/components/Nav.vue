<template>
  <nav class="navbar" role="navigation">
    <h1 class="title">ANAGRANMA</h1>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item is-active">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Your List
          </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <a class="navbar-item">
          Login
        </a>
        <a class="navbar-item">
          Register
        </a>
      </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      showNav: false
    };
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
</style>


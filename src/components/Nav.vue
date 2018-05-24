<template>
  <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <!-- <img src="" alt="Logo"> -->
            <h3>ANAGRANMA</h3>
          </a>
          <span class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active' : showNav }">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item is-active">
                Home
            </router-link>
            <router-link to="/backend" class="navbar-item">
              About
            </router-link>
            <a class="navbar-item">
              Resources
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        showNav: false
      }
    }
  }

</script>

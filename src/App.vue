<template>
   <section class="hero is-fullheight is-default is-bold" id="app">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="../">
                          <h1>ANAGRAMMA</h1>
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul>
                                    <li class="is-active"><a>Home</a></li>
                                    <li><a href="">Saved words</a></li>
                                    <li><a href="">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <h1 class="title">
                        Create an Anagram
                    </h1>
                    <h2 class="subtitle">
                        Enter a word and see all possible combination
                    </h2>

                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <input class="input" type="text" placeholder="Enter your word" id="word">
                        </p>
                        <p class="control">
                            <a class="button is-info" id="submit">Submit</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <ul id="list"></ul>

        <div class="columns is-centered">
            <div class="column has-text-centered is-3">
                <p>Created by <a href="http://franpetraroli.com">Fran Petraroli 2018</a></p>
            </div>  
        </div>
    </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
 @import "../node_modules/bulma/bulma.sass";
</style>

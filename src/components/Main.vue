<template>
  <section class="hero is-fullheight is-default is-bold" id="app">
        <div class="hero-head">
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
                  <InputForm></InputForm>
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

import InputForm from "./InputForm"
export default {
  name: 'HelloWorld',
  components:{  
    InputForm
  }
}
</script>

<style scoped>

.hero-body{
  align-items: unset !important;
  margin-top: 150px !important;
}

</style>

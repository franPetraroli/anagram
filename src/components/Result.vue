<template>
  <div>
    <h1>{{word}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data (){
      return{
        word: this.$store.state.searched_word
      }
    }
}
</script>
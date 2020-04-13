<template>
  <div id = 'vue_det'>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: "Home",
        id: 'vue_det',
        data () {
          return {
            msg: '欢迎来到菜鸟教程！'
          }
        }
    }
</script>

<style scoped>

</style>

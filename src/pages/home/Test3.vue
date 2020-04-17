<template>
  <div>
    <button @click="changeMessage">change</button>
  </div>
</template>

<script>
  export default {
    name: "Test3",
    inject: ['elTest'],
    methods: {
      changeMessage() {
        this.elTest.change(this.$options._componentTag)
      }
    }
  }
</script>

<style scoped>

</style>

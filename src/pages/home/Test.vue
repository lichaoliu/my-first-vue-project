<template>
  <div>{{message}} <Test2></Test2></div>
</template>

<script>
  import Test2 from './Test2'
  export default {
    name: "Test",
    provide() {
      return {
        elTest: this
      }
    },
    data() {
      return {
        message: 'message from test'
      }
    },
    methods: {
      change(component) {
        this.message = 'message from ' + component
        console.log(component)
      }
    },
    components: {
      Test2
    }
  }
</script>

<style scoped>

</style>

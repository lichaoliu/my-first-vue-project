<template>
  <div>
    {{message | lower}}
  </div>
</template>

<script>
  export default {
    name: "Filter1",
    filters: {
      lower(value) {
        return value.toLowerCase()
      }
    },
    data() {
      return {
        message: 'Hello vue'
      }
    }
  }
</script>

<style scoped>

</style>

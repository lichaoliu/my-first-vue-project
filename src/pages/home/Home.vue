<template>
  <div id='vue_det'>
    <button @click="boost">触发事件</button>
  </div>
</template>

<script>
  export default {
    name: "Home",
    id: 'vue_det',
    data() {
      return {
        message: 'hello vue'
      }
    },
    created: function () {
      this.$on(['my_events','my_events2'], this.handleEvents)
      console.log(this._events)
      // this.$on('my_events', this.handleEvents2)
    },
    methods: {
      handleEvents(e) {
        console.log(this.message, e)
      },
      handleEvents2(e) {
        console.log('handleEvents2', e)
      },
      boost() {
        this.$emit('my_events2', 'my params')
      }
    }

  }
</script>

<style scoped>
</style>

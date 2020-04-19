<template>
  <!--  <div id="root1">-->
  <!--    <h3>Watch 用法1：常见用法</h3>-->
  <!--    <input v-model="message"></input>-->
  <!--    <span>{{copyMessage}}</span>-->
  <!--  </div>-->
  <!--  <div id="root2">-->
  <!--    <h3>Watch 用法2：绑定方法</h3>-->
  <!--    <input v-model="message"></input>-->
  <!--    <span>{{copyMessage}}</span>-->
  <!--  </div>-->
  <!--  <div id="root3">-->
  <!--    <h3>Watch 用法3：deep+handler</h3>-->
  <!--    <input v-model="deepMessage.a.b"></input>-->
  <!--    <span>{{copyMessage}}</span>-->
  <!--  </div>-->
  <!--    <div id="root4">-->
  <!--      <h3>Watch 用法1：常见用法</h3>-->
  <!--      <input v-model="message"></input>-->
  <!--      <span>{{copyMessage}}</span>-->
  <!--    </div>-->
  <!--  <div id="root5">-->
  <!--    <h3>Watch 用法1：常见用法</h3>-->
  <!--    <input v-model="message"></input>-->
  <!--    <span>{{copyMessage}}</span>-->
  <!--  </div>-->
  <div id="root6">
    <h3>Watch 用法1：常见用法</h3>
    <input v-model="message.a.b"></input>
    <span>{{copyMessage}}</span>
  </div>
</template>

<script>
  // export default {
  //   name: "Watch1",
  //   watch: {
  //     message(value) {
  //       this.copyMessage = value
  //     }
  //   },
  //   data() {
  //     return {
  //       message: 'Hello vue',
  //       copyMessage: ''
  //     }
  //   }
  // }
  // export default {
  //   name: "Watch1",
  //   watch: {
  //     message: 'handleMessage'
  //   },
  //   data() {
  //     return {
  //       message: 'Hello vue',
  //       copyMessage: ''
  //     }
  //   },
  //   methods: {
  //     handleMessage(value) {
  //       this.copyMessage = value
  //     }
  //   }
  // }
  // export default {
  //   name: "Watch1",
  //   watch: {
  //     message: [{
  //       handler: 'handleMessage'
  //     },
  //       'handleMessage2',
  //       function (value) {
  //         this.copyMessage = this.copyMessage + "..."
  //       }],
  //   },
  //   data() {
  //     return {
  //       message: 'Hello vue',
  //       copyMessage: ''
  //     }
  //   },
  //   methods: {
  //     handleMessage(value) {
  //       this.copyMessage = value
  //     },
  //     handleMessage2(vue) {
  //       this.copyMessage = this.copyMessage + '*'
  //       console.log(this.copyMessage)
  //     }
  //   }
  // }
  export default {
    name: "Watch1",
    watch: {
      'message.a.b': 'handleMessage'
    },
    data() {
      return {
        message: {
          a: {
            b: 'Hello vue'
          }
        },
        copyMessage: ''
      }
    },
    methods: {
      handleMessage(value) {
        this.copyMessage = value
      }
    }
  }
</script>

<style scoped>

</style>

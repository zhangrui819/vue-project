<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWord msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloWord from '../components/hello-world/index'

export default {
  name: 'home',
  components: {
      HelloWord
  }
}
</script>

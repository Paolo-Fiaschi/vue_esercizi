<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <CardComponent title="Titolo card1" description="Descrizione Card1"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // CardComponent
  }
}
</script>

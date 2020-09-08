<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CardComponent title="Titolo card1" description="Descrizione Card1"/>
    <CardComponent title="Titolo card2" description="Descrizione Card2"/>
    <CardComponent title="Titolo card3" description="Descrizione Card3"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CardComponent
  }
}
</script>

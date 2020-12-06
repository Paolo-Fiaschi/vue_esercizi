<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        {{msg}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

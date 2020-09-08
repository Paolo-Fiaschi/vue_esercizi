<template>
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img src="https://fakeimg.pl/350x200/?text=Component&font=lobster" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{description}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    name: 'CardComponent',
    data() {
        return {
        }
    },
    props:{
        title: String,
        description: String
    }
}
</script>

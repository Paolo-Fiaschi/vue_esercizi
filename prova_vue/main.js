var app = Vue.component('App',{
  template: `
    <div class="container">
      <products-list></products-list>
    </div>
  `,
  data() {
      return{
        };
  }  
})
Vue.component('products-list',{
  template: `
    <div>
      <h2>Elenco prodotti</h2>
      <div>
        <product-box  v-for="product in products" :key="product.id" v-bind:item="product"></product-box>
      </div>
    </div>
  `,
  data(){
    return{
      products:[{
        id: 1,
        nome: "Prodotto 1",
        descrizione: "Breve descrizione del prodotto",
        prezzo: 15,
        disp: 100
      },
      {
        id: 2,
        nome: "Prodotto 2",
        descrizione: "Breve descrizione del prodotto",
        prezzo: 12,
        disp: 20
      },
      {
        id: 3,
        nome: "Prodotto 3",
        descrizione: "Breve descrizione del prodotto",
        prezzo: 5,
        disp: 230
      },
      {
        id: 4,
        nome: "Prodotto 4",
        descrizione: "Breve descrizione del prodotto",
        prezzo: 24,
        disp: 1
      },
      {
        id: 5,
        nome: "Prodotto 5",
        descrizione: "Breve descrizione del prodotto",
        prezzo: 32,
        disp: 54
      },
      {
        id: 6,
        nome: "Prodotto 6",
        descrizione: "Breve descrizione del prodotto",
        prezzo: 8,
        disp: 16
      }
      ]
    }
  }
});
Vue.component('product-box', {
  template: `
    <div class="card" style="width: 240px; float: left; margin: 16px;">
    <img class="card-img-top"
                v-bind:src="'https://picsum.photos/240/240?image=' + item.id">
    <div class="card-body">
      <h4 class="card-title">{{item.nome}}</h4>
      <p class="card-text">{{item.descrizione}}</p>
      <p class="card-text text-right"><strong>Prezzo: ¢{{item.prezzo}}</strong></p>
      <a href="#" class="btn btn-primary">Dettaglio</a>
    </div>

    </div>
  `,
  props: ['item']
});
new Vue({
    el: "#app"
})

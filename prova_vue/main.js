var app = Vue.component('App',{
  template: `
    <div class="container">
    <h1>{{titolo}}</h1>
    <p> <span :style="colorRed">5 + 3 fa:</span> {{5+3}}</p>
    <p>{{user.firstName}} {{user.secondName}}</p>
    <p>{{user.getFullName()}} {{titolo}}</p>
    <p>Nominativo completo maiuscolo: {{user.getFullName().toUpperCase()}}</p>
    <button class="btn btn-primary" :disable="isDisable"><a :href="myUrl">Click</a></button>
    </div>
  `,
  data() {
      return{
          titolo: "Ciao a tutti",
          colorRed: "color: red",
          myUrl: "https://www.google.it/",
          isDisable: false,
          user:{
              firstName: "Paolo",
              secondName: "Fiaschi",
              getFullName: function() {return this.firstName + " " + this.secondName;}
          }
        };
  }  
})
new Vue({
    el: "#app"
})

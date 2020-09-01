var app = Vue.component('App',{
  template: `
    <div class="container">
      <div v-if="isAbilited" >
        <button class="btn btn-primary">Elimina file</button>        
      </div>
      <!-- C'è anche la possibilità di usare v-else-if per le solite regole -->
      <div v-else>
        Utente non abilitato
      </div>
    </div>
  `,
  data() {
      return{
        isAbilited: true
        };
  }  
})
new Vue({
    el: "#app"
})

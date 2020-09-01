var app = Vue.component('App',{
  template: `
    <div class="container">
      <form>
        <div class="form-group">
          <template v-if="loginType === 'username'">
            <label>Username</label>
            <input key="username" class="form-control" placeholder="Enter your username">
          </template>
          <template v-else>
            <label>Email</label>
            <input key="email" class="form-control" placeholder="Enter your email address">
          </template>
        </div>
      </form>
      <button v-on:click="byUsername()" class="btn btn-primary">Per Username</button>
      <button v-on:click="byEmail()" class="btn btn-primary">Per Email</button>
      <button v-show="antistress">Cliccami</button>
      <!-- Con v-show l'elemento viene renderizzato e se non presente messo come disp none, mentre
    con il v-if se la condizione non viene rispettata l'elemnto non viene renderizzato, quindi per un elemento
  che non deve/dovrebbe cambiare stato melgio v-if altrimenti v-show -->
    </div>
  `,
  data() {
      return{
        antistress: false,
        loginType: "username",
        byUsername(){
          this.loginType = "username";
        },
        byEmail(){
          this.loginType = "email";
        }
        };
  }  
})
new Vue({
    el: "#app"
})

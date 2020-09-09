<template>
  <div class="home">
    <!-- <CardComponent title="Titolo card1" description="Descrizione Card1"/> -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Utente</h5>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model.lazy="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                  <input v-model.number="user.numb" type="number" class="form-control" id="exampleInputPassword1" placeholder="Number">
                </div>
                <div class="form-group">
                   <textarea v-model="user.msg" class="form-control" id="msg" rows="3" placeholder="Messaggio"></textarea>
                </div>
                Come sei venuto a conoscenza?<br><br>

                <div class="form-group form-check">
                  <input v-model="user.sondaggio" value="Google" type="checkbox" class="form-check-input" id="chek1">
                  <label class="form-check-label" for="chek1">Google</label>
                </div>
                <div class="form-group form-check">
                  <input v-model="user.sondaggio" value="Youtube" type="checkbox" class="form-check-input" id="chek2">
                  <label class="form-check-label" for="chek2">Youtube</label>
                </div>
                <div class="form-group form-check">
                  <input v-model="user.sondaggio" value="Altro" type="checkbox" class="form-check-input" id="chek3">
                  <label class="form-check-label" for="chek3">Altro</label>
                </div>
                <div class="form-check form-check-inline">
                <input v-model="user.genere" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Maschio">
                <label class="form-check-label" for="inlineRadio1">Maschio</label>
                <input v-model="user.genere" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Femmina">
                <label class="form-check-label" for="inlineRadio1">Femmina</label>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputState">Colori</label>
                  <select v-model="user.colori" id="inputState" class="form-control">
                    <option v-for="col in selectedValues" :value="col.value" :key="col">{{col.text}}</option>
                  </select>
                </div><br>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form> 
           </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Form Data</h5>
              <p>Email: {{user.email}}</p>
              <p>Password: {{user.password}}</p>
              <p>Number: {{user.numb}}</p>
              <p style="white-space: pre">Msg: {{user.msg}}</p>
              <p>Genere: {{user.genere}}</p>
              <p>Colori: {{user.colori}}</p>
              <p>Sondaggio:</p>
              <ul>
                <li v-for="s of user.sondaggio" v-bind:key="s">
                  {{s}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'Home',
  data() {
    return {
      'user':{
        'email': '',
        'password': '',
        'number': '',
        'msg': '',
        'sondaggio': [],
        'genere': 'Maschio',
        'colori':'black'
      },
      selectedValues:[
        {value: 'yellow', text: 'Giallo'},
        {value: 'red', text: 'Rosso'},
        {value: 'black', text: 'Nero'}
        ]
    }
  }
}
</script>

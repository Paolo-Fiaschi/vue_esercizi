<template>
    <div>
        <h1>Componente AAA</h1>
        <h2>Mia Variabile: {{colore}}</h2>
        <button @click="reset">Reset</button>
        <hr>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default{
    name: 'ComponenteA',
    data() {
        return {
            myVar: "Bianco",
        }
    },
    methods:{
        firstChar(n){
            return this.colore.substring(0,n);
        },
        reset(){
            this.colore = "Verde";
            eventBus.cambioColore(this.colore);
        }
    },
    props:{
        colore: String
    }
}
</script>

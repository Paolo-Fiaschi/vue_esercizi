<template>
    <div>
        <h1>Mio Primo Componente</h1>
        <h2>{{myVar}}</h2>
        <button @click="myVar = 'Giallo'">Cambia</button>
        <hr>
    </div>
</template>

<script>
export default{
    name: 'MioPrimoComponente',
    data() {
        return {
            myVar: "Bianco",
        }
    }
}
</script>

<style scoped>
    div{
        border: 1px solid black;
    }
</style>
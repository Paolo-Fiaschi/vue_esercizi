<template>
    <div @click="change()" style="cursor: pointer">
        <span v-if="value" class="material-icons">star</span>
        <span v-if="!value" class="material-icons">star_border</span>
    </div>
</template>

<script>
export default{
    name: 'Star',
    props: ['value'],
    data() {
        return {
            pref: false,
        }
    },
    methods:{
        change() {
            this.value = !this.value;
            this.$emit('input', this.value);
        }
    },
    }
</script>

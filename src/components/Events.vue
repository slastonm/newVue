<template>
    <div>
        <h3 class="text-center">
            {{ count }}
        </h3>
        <div class="text-center mb-3">
            <button v-on:click="addValue" class="btn btn-info me-1">
                +
            </button>
            <button @click="minusValue" class="btn btn-info">
                -
            </button>
        </div>
        <div class="mb-3">
            <button @click="sayHello('test value')" class="btn btn-info">
                Call function + value
            </button>
            <button @click="cathEvent" class="btn btn-info ms-3">
                Catch event
            </button>
            <button @click="cathValueEvent('Hello world', $event)" class="btn btn-dark ms-3">
                Catch event
            </button>
            <a 
            href="https://getbootstrap.com/docs/5.3/examples/pricing/" 
            class="btn-link ms-3"
            @click.prevent="preventLink">Visit site</a>
            <button @click.once="logEvent('click once')" class="btn btn-info ms-3">
                You have just on click
            </button>
        </div>
        <form @submit.prevent>
            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key up enter"
            @keyup.enter="logEvent('Key up enter')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key up esc"
            @keyup.esc="logEvent('Key up esc')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key up space"
            @keyup.space="logEvent('Key up space')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key up"
            @keyup.up="logEvent('Key up')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key left"
            @keyup.left="logEvent('Key left')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key ctrl"
            @keyup.ctrl="logEvent('Key ctrl')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key shift"
            @keyup.shift="logEvent('Key shift')">

            <input 
            type="text" 
            class="form-control mb-2"
            placeholder="Key alt"
            @keyup.alt="logEvent('Key alt')">
        </form>
        <button 
        @click="handlClick"
        @mouseleave="handlMouseOver"
        class="btn btn-warning"> Double event</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
function addValue() {
    count.value++
    
}
function minusValue() {
    if(count.value>0){
        count.value--
    }
}
function sayHello(value){
    alert(`Hellou user value ${value}`)
}
function cathEvent(event) {
    console.log(event);
}
function cathValueEvent(value, e){
    console.log('=======')
    console.log(`User value ${value}`)
    console.log(e);
}
function preventLink() {
    alert('Broken link')
}
function logEvent(message){
    console.log(message)
    alert(message)
}
function handlClick() {
    console.log('Button cklicked')
    alert('Click')
}
function handlMouseOver() {
    console.log('Button mouse leave')
    alert('MouseLeave')
}
</script>

<style lang="scss" scoped>

</style>
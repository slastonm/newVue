<template>
    <div class="my-3 p-2 border">
        <button 
        class="btn btn-primary me-2"
        @click="$emit('first-call')">
            Fist call emit
        </button>
        <button 
        class="btn btn-primary me-2"
        @click="clickEmit">
            Second call emit
        </button>
        <button 
        class="btn btn-primary me-2"
        @click="sendToParent">
            Change text
        </button>
        <button class="btn btn-danger" @click="closeComp">Close component</button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['first-call', 'second-call', 'changer','hide-comp'])
    function clickEmit() {
        emit('second-call')
    }
    function sendToParent() {
        const text ='Hello child value!'
        emit('changer', text)
    }
    function closeComp(){
        emit('hide-comp')
    }
</script>

<style lang="scss" scoped>

</style>
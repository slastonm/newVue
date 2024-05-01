<template>
    <div>
        <h3>
            {{ count }}
        </h3>
        <h3>
            {{ testValue }}
        </h3>
        <h3>
           Reactive value {{ reactiveObj.count }}
        </h3>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'
    let count = 0;
    const testValue = ref(0)
    setTimeout(() => {
        count = 'Changed'
        // alert('Time')
    }, 2000);
    // setInterval(() => {
    //     testValue.value +=1

    // }, 2000);

    const reactiveObj = reactive({
        count: 0
    })

    // setInterval(() => {
    //     reactiveObj.count +=1

    // }, 2000);
</script>

<style lang="scss" scoped>

</style>
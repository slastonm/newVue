<template>
    <div>
        <h3 v-if="login">
            Hello user
        </h3>
        <h3 v-else>
            Login to system
        </h3>
        <hr>
        <h3 v-if="first">First condition</h3>
        <h3 v-else-if="second">2 condition</h3>
        <h3 v-else-if="third">3 condition</h3>
        <h3 v-else>4 condition else</h3>
        <hr>
        <h3 v-show="isHidden">
            v show example
        </h3>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'
    const login = ref(false)
    const first = ref(false)
    const second = ref(false)
    const third = ref(true)
    const isHidden = ref(false)
</script>

<style lang="scss" scoped>

</style>
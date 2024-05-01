<template>
    <div class="py-4 text-center">
        <h1>
            404
        </h1>
        <h2>
            Page not found
        </h2>
        <button class="btn btn-primary" @click="goBack">
            Visit home
        </button>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()
    function goBack(){
        router.back()
    }
</script>

<style lang="scss" scoped>

</style>
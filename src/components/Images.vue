<template>
    <div>
        <h3>
            Image one
        </h3>
        <img :src="firstImage" alt="First image">
        <h3 class="bg">
            Second way
        </h3>
        <img src="./icons/logo.png" alt="">
        <img src="@/assets/Rectangle6.png" alt="">
        
    </div>
</template>

<script setup>
    import firstImage from '@/assets/Rectangle7.png'
    
</script>

<style lang="scss" scoped>

</style>
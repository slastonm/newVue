<template>
    <div class="py-4">
        <h1 class="text-center">
            Sale page
        </h1>
        <Slider></Slider>
        <!-- <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eveniet a labore, non quos perferendis laborum fuga odit facere commodi delectus quas quibusdam numquam dolore aut tempora expedita quia atque.
        </p> -->
        <div class="text-center">
            <button class="btn btn-primary" @click="goBack">
                Go back
            </button>
        </div>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    import Slider from '@/components/Slider.vue'
    const router = useRouter()
    function goBack(){
        router.back()
    }
</script>

<style lang="scss" scoped>

</style>
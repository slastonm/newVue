<template>
    <div>
        <button class="my-btn">
            Hello
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .my-btn{
        background-color: lightblue;
        padding: 10px 20px;
        color: white;
        &:hover{
            background-color: yellow;
            color: lightblue;
        }
    }
</style>
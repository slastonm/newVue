<template>
    <div class="border p-3 m-3 bg-black text-white text-center">
        <div>
            <slot name="header">
                Default slot header
            </slot>
        </div>
        <h3>
            Hello slot
        </h3>
        <div>
            <slot>
                Default value !!!
            </slot>
        </div>
        <div>
            <slot name="footer">
                Default slot Footer !!!
            </slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
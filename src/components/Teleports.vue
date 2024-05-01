<template>
    <div
    @mouseover="showTooltip"
    @mouseleave="hideTooltip" 
    class="border p-3 m-2 position-relative">
        <slot></slot>
        <teleport to='body'>
            <div v-if="isVisibl" class="tooltip-content" :style="tooltipStyle">
                {{ text }}
            </div>
        </teleport>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    const props = defineProps({
        text:String
    })
    const isVisibl = ref(false)
    const tooltipStyle = reactive({
        position: 'absolute',
        top: '0px',
        right: '0px',
        width:'180px',
        textAlign:'center',
        zIndex: 100,
        backgroundColor: 'black',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize: '14px'
    })
    function showTooltip(e) {
        isVisibl.value = true
        const boundRect = e.target.getBoundingClientRect()

        tooltipStyle.left =`${boundRect.right + window.scrollX +10}px`
        tooltipStyle.top = `${boundRect.top + window.scrollY}px`

    }
    function hideTooltip(){
        isVisibl.value = false
    }
</script>

<style lang="scss" scoped>
    .tooltip-content{
        transition: all 3s;
    }
</style>
<template>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">Pricing title: {{ titel }}</h1>
        <p class="fs-5 text-body-secondary">Text: {{ text }}</p>
        <p>
            Price: {{ price }}
        </p>
        <p>
            Test boolean {{ booleanProp ? 'Yes':'No' }}
        </p>
        <p>
            Array {{ arrayProp.join(', ') }}
        </p>
        <p>
            Object {{ objectProp.keyValue }}
        </p>
        <p>
            Date {{ dateProp.toDateString() }}
        </p>
        <button class="btn btn-warning" @click="functionProp">
            Click me
        </button>
        <p>
            Type prop: {{ typeProp }}
        </p>
        <p>
            Default:{{ defaultPropValue }}
        </p>
    </div>
</template>

<script setup>
    const props = defineProps({
        titel:String,
        text:String,
        price:Number,
        booleanProp:Boolean,
        arrayProp:Array,
        objectProp:Object,
        dateProp:Date,
        functionProp:Function,
        typeProp:{
            type:String,
            required: true
        },
        defaultPropValue:{
            type:String,
            default:'Невідомо'
        }
    })
</script>

<style lang="scss" scoped>

</style>
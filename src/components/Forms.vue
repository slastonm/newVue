<template>
    <div>
        <div class="mb-3">
            <label 
            for="email" 
            class="form-label">
                Email address {{ emailValue }}
            </label>
            <input 
            type="email" 
            class="form-control" 
            id="email"
            v-model.trim="emailValue"
            placeholder="name@example.com">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
        </label>
        <textarea 
        class="form-control" 
        id="textValue" 
        v-model.trim="textArea"
        rows="3"></textarea>
        </div>
        <p v-show="textArea.length>0" class="mb-3">
            Text area value: {{ textArea }} {{ textArea.length}}
        </p>
        <div class="form-check">
            <input 
            class="form-check-input" 
            type="checkbox"
            v-model="chekValue"
            id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Default checkbox {{ chekValue }}
            </label>
        </div>
        <div>
            <h3>
                Transport
            </h3>
            <input 
            class="form-check-input" 
            type="checkbox"
            v-model="transportSelect"
            value="Bus"
            id="bus">
            <label class="form-check-label" for="bus">
                Bus
            </label>
            <input 
            class="form-check-input" 
            type="checkbox"
            v-model="transportSelect"
            value="Value Car"
            id="car">
            <label class="form-check-label" for="car">
                Car
            </label>
            <input 
            class="form-check-input" 
            type="checkbox"
            v-model="transportSelect"
            value="tes value Bike"
            id="bike">
            <label class="form-check-label" for="bike">
                Bike
            </label>
        </div>
        <div>
            User select transport: {{ transportSelect.length }} 
            <p>
                {{ transportSelect }}
            </p>
        </div>
        <h3>Radio buttons {{ devliveryValue }}</h3>
        <div class="form-check">
        <input 
        class="form-check-input" 
        type="radio" 
        name="ukr-post" 
        id="ukr-post1"
        value="ukr-post value"
        v-model="devliveryValue">
        <label class="form-check-label" for="ukr-post1">
            Delivery urk-post
        </label>
        </div>
        <div class="form-check">
        <input 
        class="form-check-input" 
        type="radio" 
        name="new-post" 
        id="new-post"
        value="new-post value"
        v-model="devliveryValue">
        <label class="form-check-label" for="new-post">
            Delivery new-post
        </label>
        </div>
        <div class="form-check">
        <input 
        class="form-check-input" 
        type="radio" 
        name="city-post" 
        id="city-post"
        value="city-post value"
        v-model="devliveryValue">
        <label class="form-check-label" for="city-post">
            Delivery city-post
        </label>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const emailValue = ref('')
    const textArea = ref('')
    const chekValue = ref(false)
    const transportSelect = ref([])
    const devliveryValue = ref('')
</script>

<style lang="scss" scoped>

</style>
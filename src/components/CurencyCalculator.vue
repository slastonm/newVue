<template>
    <div>
        <ul class="list-group mt-3">
            <li 
            class="list-group-item d-flex justify-content-between"
            v-for="currenci in currencies"
            :key="currenci.id">
                <strong>{{ currenci.name }} {{ currenci.code }}</strong>
                $1 = {{ currenci.rate }} invert value  {{ invertDate[currenci.id] }}
                
            </li>   
        </ul> 
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    const currencies = reactive([
        { id: 1, name: 'Euro', code: 'EUR', rate: 0.91 },
        { id: 2, name: 'Japanese Yen', code: 'JPY', rate: 115.75 },
        { id: 3, name: 'British Pound', code: 'GBP', rate: 0.75 }
    ])
    const invertDate = computed(() => {
        let rates ={}
        currencies.forEach(element => {
            rates[element.id] = (1/element.rate).toFixed(4)
        });
        return rates
    })
</script>

<style lang="scss" scoped>

</style>
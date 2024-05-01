<template>
    <div>
        <h1 class="text-center">
            Корзина товарів
        </h1>
        <ul class="list-group my-3">
                    <li 
                    class="list-group-item d-flex justify-content-between"
                    v-for="item in items"
                    :key="item.id">
                        <span>
                            {{ item.name }} ціна за кг {{ item.price }}
                        </span>
                        <div>
                            <button class="btn btn-success me-2" @click="addProduct(item)">
                                Додати продукт
                            </button>
                            <button class="btn btn-danger" @click="removeProduct(item)">
                                Видалити продукт
                            </button>                            
                        </div>

                    </li>
                    
                </ul> 
            <h2>
                Загальна вартість {{ total }}
            </h2>  
    </div>
</template>

<script setup>
    import { watch, computed, reactive, ref } from 'vue'
    const items = reactive([
        { id: 1, name: 'Яблуко', price: 50 },
        { id: 2, name: 'Банан', price: 60 },
        { id: 3, name: 'Апельсин', price: 70 }
    ])
    const cart = reactive([])
    const itemCount = ref(0)

    const total = computed(() => {
        return cart.reduce((acc, item)=>acc+item.price, 0)
    })

    function addProduct(item) {
        cart.push(item)
        itemCount.value++
    }
    function removeProduct(item){
        const index = cart.findIndex(x=>x.id === item.id)
        if(index !== -1){
            cart.splice(index, 1)
            itemCount.value--
        }
    }
    watch(itemCount, (newCount, oldCount)=>{
        if(newCount>oldCount){
            console.log(`Ви додали товар ${cart[cart.length-1].name}`);
        }
        else{
            console.log('Ви видалили товар з корзини');
        }
    })
</script>

<style lang="scss" scoped>

</style>
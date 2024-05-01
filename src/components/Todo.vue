<template>
    <div>
        <h1 class="text-center"> 
            Todo tasks
        </h1>
        <form @submit.prevent="addTodo">
            <div class="input-group mb-3">
                <input 
                v-model="state.newTodoValue"
                @keyup.enter="addTodo"
                type="text" 
                class="form-control" 
                placeholder="Todo item" 
                aria-label="Todo item" 
                aria-describedby="button-addon2">
                <button 
                class="btn btn-outline-secondary" 
                type="submit" 
                id="button-addon2">
                    Button
                </button>
            </div>

        </form>
        <div class="row">
            <div class="col">
                <ul class="list-group mt-3">
                    <li 
                    class="list-group-item d-flex justify-content-between"
                    :class="todo.status ? 'bg-success-subtle':'bg-body-tertiary'"
                    v-for="todo in state.todo"
                    :key="todo.id">
                        <span>
                            <input 
                            class="form-check-input" 
                            type="checkbox"
                            v-model="todo.status"
                            :id="todo.id">
                            {{ todo.text }}
                        </span>
                        
                        <button class="btn btn-danger" @click="removeTodo(todo.id)">
                            Delete todo
                        </button>
                    </li>
                    
                </ul>                
            </div>
            <div class="col">
                <ul class="list-group mt-3">
                    <li 
                    class="list-group-item d-flex justify-content-between"
                    v-for="doneItem in doneList"
                    :key="doneItem.id">
                        <span>
                            {{ doneItem.text }}
                        </span>
                    </li>
                    
                </ul> 
            </div>
        </div>

    </div>
</template>

<script setup>
    import { reactive, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
    const state = reactive({
        todo:[],
        newTodoValue:'',
        nextId:0
    })
    function addTodo() {
        if(state.newTodoValue){
            state.todo.push({
                id:state.nextId++,
                text:state.newTodoValue,
                status:false
            })
            state.newTodoValue = ''
        }
    }
    function removeTodo(id){
        state.todo = state.todo.filter(todo =>todo.id !== id)
    }
    const doneList = computed(() => {
        return state.todo.filter(todo=>todo.status === true)
    })
    onBeforeMount(() => {
        console.log('Компонент ще не був вмонтований в DOM')
    })
    onMounted(() => {
        console.log('Компонент був вмонтований в DOM')
    })
    onBeforeUpdate(() => {
        console.log('Компонент буде оновлено')
    })
    onUpdated(() => {
        console.log('Компонент оновлено')
        
    })
    onBeforeUnmount(() => {
        console.log('Компонент буде знищено')
    })
    onUnmounted(() => {
        console.log('Компонент знищено')
    })
</script>

<style lang="scss" scoped>

</style>
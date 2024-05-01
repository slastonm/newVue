<template>
    <div>
        <!-- <div  v-bind:id="myId">
            Example id
        </div> -->
        <div :id="myId">
            Example id 2
        </div>
        <div :id="`my-test-${myId}`">
            Example 3
        </div>
        <div :class="styleValue">
            Style
        </div>
        <div :class="styleCreate()">
            function style
        </div>
        <ul class="list-group">
            <!-- <li class="list-group-item">An item</li> -->
            <li 
             v-for="todo in state.todos"
             class="list-group-item"
             :class="todo.status ? 'bg-success':'bg-secondary'"  
             :key="todo.id">
                {{ todo.text }}
            </li>
        </ul>
        <ol class="list-group list-group-numbered mt-3">
        <!-- <li class="list-group-item">A list item</li> -->
            <li v-for="value in myObjData" class="list-group-item">
                Content:
                {{value}}
            </li>
        </ol>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'
    const myId = ref('myIdValue')
    const styleValue = ref('p-5 bg-primary')
    function styleCreate(){
        return 'p-1 bg-warning'
    }
    const state = reactive({
        todos: [
            {id:0, text:'HW1', status:true},
            {id:1, text:'HW2', status:false},
            {id:2, text:'HW3', status:true}
        ],
        nextId:3,
        filmCategory:[],
        filmRaiting:[]
    })
    function addTodoHw(){
        state.todos.push({
            id:state.nextId++,
            text:`HW ${state.nextId}`,
            status:false
        })
    }
    setTimeout(()=>{
        // addTodoHw()
        state.todos.reverse()
    }, 5000)

    const myObjData = ref({
        userName:'Tom',
        userSkill:'html, css, js',
        userNickname:'SuperDev'
    })
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <transition-group name="list" tag="section">
            <div
            v-for="post in state.posts" 
            :key="post.id"
            class="my-1 p-2 text-center">
                <h3>
                    {{ post.title }}
                </h3>
                <p>
                    {{ post.body }}
                </p>
            </div>             
        </transition-group>


        <button class="btn btn-success" @click="fetchNextPost">
            Next post
        </button>
        <button class="btn btn-danger ms-3" @click="toggleBtn">
            Hide show block
        </button>
        <transition name="fade">
            <p class="mt-3 border p-1" v-if="isShow">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi, harum, neque dolorum qui eveniet exercitationem ea ex perferendis labore maxime expedita, at laborum quasi culpa distinctio quae perspiciatis aperiam.
            </p>
        </transition>
    </div>
</template>

<script setup>
    import {  ref, reactive, onMounted } from 'vue'
    const isShow = ref(true)
    function toggleBtn() {
        isShow.value = !isShow.value
    }
    const state = reactive({
        posts: [],
        postId:1
    })
    async function fetchPost() {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${state.postId}`)
            if(!response.ok){
                throw new Error('Request error', response.status)
            }
            const newPost = await response.json()
            state.posts.push(newPost)
        }
        catch(err){
            console.log(err)
        }
    }
    function fetchNextPost() {
        state.postId++
        fetchPost()
    }
    onMounted(fetchPost)

</script>

<style scoped>
    .list-enter-active,
    .list-leave-active{
        opacity: 0;
        transition: all 1.5s;
        transform: translateX(-100px);
    }
    .list-enter,
    .list-enter-to{
        opacity: 1;
        transform: translateX(0);
    }

    .fade-enter-active,
    .fade-leave-active{
        opacity: 0;
        transition: all 1.5s;
    }
    .fade-enter,
    .fade-enter-to{
        opacity: 1;
    }
</style>
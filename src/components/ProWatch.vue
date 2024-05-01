<template>
    <div>
        <div class="row mb-3 g-3 align-items-center">
            <div class="col-auto">
                <label for="name" class="col-form-label">User name:</label>
            </div>
            <div class="col-auto">
                <input type="text" id="name" v-model="userProfile.userName" class="form-control">
            </div>
        </div>
        <div class="row mb-3 g-3 align-items-center">
            <div class="col-auto">
                <label for="email" class="col-form-label">User email:</label>
            </div>
            <div class="col-auto">
                <input type="text" id="email" v-model="userProfile.email" class="form-control">
            </div>
        </div>
        <div class="mb-3">
            <button class="btn btn-warning" @click="stopWatchers">Stop watcher</button>
        </div>
        <h3>
            Кількість змін зафіксовано {{ countChanges }}
        </h3>
    </div>
</template>

<script setup>
    import { watch, ref, reactive } from 'vue'
    const userProfile = reactive({
        userName: 'John Dou',
        email:'testjohn@gmail.com'
    })
    const countChanges = ref(0)
    const userNameWatcher = watch(userProfile, (newVal, oldVal)=>{
        console.log(`User profile chages ${newVal}`)
        countChanges.value++
    },{deep:true})

    const userEmailWatcher = watch(()=>userProfile.email, (newVal, oldVal)=>{
        
        console.log(`User email chages ${newVal} old value ${oldVal} `)
        countChanges.value++
    },{immediate:true})

    function stopWatchers() {
        userEmailWatcher()
        userNameWatcher()
        console.log('Вотчери зупинено');
    }
</script>

<style lang="scss" scoped>

</style>
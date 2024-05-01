<template>
    <div>
        <form class="row g-3">
            <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Email</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input ref="inputRef" type="password" class="form-control" id="inputPassword2" placeholder="Password">
            </div>
            <div class="col-auto">
                <button type="button" @click="activeInput" class="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </form>
        <div class="row mb-5">
            <div ref="animteDiv" class="col text-center p-3 bg-success">
                Animate me
            </div>
        </div>
        <div class="text-center">
            <button @click="animationFn" class="btn btn-danger">
                Animate block
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const inputRef = ref(null)
    const animteDiv = ref(null)
    function activeInput() {
        inputRef.value.focus()
    }
    function animationFn(){
        animteDiv.value.style.transition = 'all 0.9s'
        animteDiv.value.style.transform = 'scale(1.5)'
    }
</script>

<style lang="scss" scoped>

</style>
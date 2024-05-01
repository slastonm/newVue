<template>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm"
        :class="type === 'Enterprise' ? 'border-primary':''">
          <div class="card-header py-3"
          :class="type === 'Enterprise' ? 'text-bg-primary border-primary':''">
            <h4 class="my-0 fw-normal">{{type}}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${{price}}<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="(value, index) in propositions" :key="index">
                {{ value }}
              </li>
            </ul>
            <button 
            type="button" 
            class="w-100 btn btn-lg"
            :class="(type === 'Enterprise' || type === 'Pro') ? 'btn-primary':'btn-outline-primary'"
            >
                {{ buttonLabel }}
            </button>
          </div>
        </div>
      </div>
</template>

<script setup>
    const props=defineProps({
        type:String,
        price:Number,
        propositions:Object,
        buttonLabel:{
            type:String,
            default:'Buy plan'
        }
    })
</script>

<style lang="scss" scoped>

</style>
<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Images from './components/Images.vue';
  import Styles from './components/Styles.vue';
  import ReactiveValue from './components/ReactiveValue.vue'
  import TemplateIfShow from './components/TemplateIfShow.vue'
  import ReactiveList from './components/ReactiveList.vue'
  import Events from './components/Events.vue'
  import FontIcon from './components/FontIcon.vue'
  import Forms from './components/Forms.vue'
  import Todo from './components/Todo.vue'
  import CurencyCalculator from './components/CurencyCalculator.vue'
  import RefTemplat from './components/RefTemplate.vue'
  import WatcherCart from './components/WatcherCart.vue'
  import ProWatch from './components/ProWatch.vue'
  import { ref, reactive } from 'vue'
  const isVisible = ref(true)
  function hideShow() {
    isVisible.value = !isVisible.value
  }

  
  const data = reactive({
    plans: [
      {
        id:1,
        type: "Free",
        price: 0,
        propositions:{
          users: 10,
          storage: "2 GB",
          support: "Email support",
          access: "Help center access"      
        },
        buttonLabel: "Sign up for free"
      },
      {
        id:2,
        type: "Pro",
        price: 15,
        propositions:{
          users: 20,
          storage: "10 GB",
          support: "Priority email support",
          access: "Help center access"       
        },

        buttonLabel: "Get started"
      },
      {
        id:3,
        type: "Enterprise",
        price: 29,
        propositions:{
          users: "Unlimited",
          storage: "Custom",
          support: "Dedicated support",
          access: "Help center access"       
        },
        buttonLabel: "Contact us"
      }
    ]
  })
  import CardPlan from './components/CardPlan.vue'
  import Emits from './components/Emits.vue'
  function callA() {
    alert('First example call')
  }
  function callB() {
    alert('Second example call !!!!')
  }
  const parentText = ref('Hello parent App comp')
  function updateParentText(childValue) {
    parentText.value = childValue
  }
  const isShow = ref(false)
  function showHide() {
    isShow.value = !isShow.value
  }

  import Slots from './components/Slots.vue'
  import Teleports from './components/Teleports.vue'
  import PosFetch from './components/PostFetch.vue'
</script>

<template>
  <div class="container py-3 bg">
      <Header></Header>

      <router-view></router-view>
      <!-- <PosFetch></PosFetch> -->
      <!-- <Teleports text="Tooltip component">
        Hello teleport component
      </Teleports>
      <Slots>
        <template v-slot:header>
          <div class="p-2 bg-warning">
            Header slot
          </div>
        </template>
        <p class="bg-danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui eveniet ullam placeat cum voluptatem ex perspiciatis eius fuga accusantium, doloribus porro, delectus quos inventore praesentium, consequuntur harum exercitationem?
        </p>
        <template v-slot:footer>
          <div class="p-2 bg-info">
            Footer slot
          </div>
        </template>
      </Slots> -->
      <!-- <h1>
        {{ parentText }}
      </h1>
      <button class="btn btn-success my-2"
      @click="showHide">
        {{ isShow? 'Hide emit component':'Show emit component' }}
      </button>
      <Emits
      v-if="isShow"
      @first-call="callA"
      @second-call="callB"
      @changer="updateParentText"
      @hide-comp="showHide">
      </Emits> -->
      <!-- <ProWatch></ProWatch> -->
      <!-- <WatcherCart></WatcherCart> -->
      <!-- <div class="text-center p-5">
        <button class="btn btn-danger" @click="hideShow">
          Unmount mount component
        </button>
      </div> -->
      <!-- <Todo v-if="isVisible"></Todo> -->
      <!-- <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <CardPlan
        v-for="plan in data.plans"
        :key="plan.id"
        :type="plan.type"
        :price="plan.price"
        :propositions="plan.propositions"
        :buttonLabel="plan.buttonLabel"
        ></CardPlan>

      </div> -->
      <Footer></Footer>
      <!-- ctrl + C cmnd C -->
  </div>
</template>

<style scoped>
  /* .bg{
    background-image: url('@/assets/bg.png');
  } */
</style>

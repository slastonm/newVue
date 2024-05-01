<template>
    <div>
        <h1 class="font">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quisquam possimus autem corporis neque eveniet officia numquam eum ad fugiat nisi non! Ratione eveniet suscipit officiis tempore? Vero, eius quam!
        </h1>
        <p>
            npm i --save @fortawesome/fontawesome-svg-core <br>
            npm i --save @fortawesome/free-solid-svg-icons <br>
            npm i --save @fortawesome/free-regular-svg-icons <br>
            npm i --save @fortawesome/free-brands-svg-icons <br>
            npm i --save @fortawesome/vue-fontawesome@latest-3
        </p>
        <ul>
            <li><font-awesome-icon :icon="['fas', 'star']" /></li>
            <li><font-awesome-icon icon="fa-solid fa-star" /></li>
            <li><font-awesome-icon icon="star" /></li>
            <li>
                <font-awesome-icon :icon="['far', 'star']" />
            </li>
            <li>
                <font-awesome-icon icon="fa-regular fa-star" />
            </li>
        </ul>
        <p>
            Test
            <font-awesome-icon
            v-for="(value, index) in raiting"
            :key="index"
            :icon="value ? ['fas', 'star'] : ['far', 'star'] " 
             />
        </p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
    import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(faStar, farStar)
    const raiting = ref([true, true, false, false, false])
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
.font {
  font-family: "Jersey 10", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
}
</style>
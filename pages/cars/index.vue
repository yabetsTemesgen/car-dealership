<template>
  <div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div v-for="c in cars" v-bind:key="c.id">
              <CarCard :car="c"/>
              <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
          </div>
      </div>
  </div> 
</template>

<script setup>
// definePageMeta({
//   layout: 'cars'
// })
//  const {data: products} = await useFetch('https://fakestoreapi.com/products')
const {data: cars} = await useFetch('http://localhost:3000/cars')
useHead({
  title: 'Explore Cars',
  meta:[
    {name:'description', content:'cars found in ethiopia'}  
  ]
})

</script>

<style scoped>

</style>
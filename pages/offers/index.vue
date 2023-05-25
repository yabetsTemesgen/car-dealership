<template>
    <div>
        <h1 class="text-white text-4xl font-bold">Previous Offers made by other clients</h1>
    <table class="min-w-full text-left text-sm font-light text-white">
  <thead class="border-b font-medium dark:border-neutral-500">
    <tr>
      <th scope="col" class="px-6 py-4">Full Name</th>
      <th scope="col" class="px-6 py-4">Car Name</th>
      <th scope="col" class="px-6 py-4">Phone Number</th>
      <th scope="col" class="px-6 py-4">Email</th>
      <th scope="col" class="px-6 py-4">Offer</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(o,i) in offers" :key="i" class="border-b dark:border-neutral-500">
      <td class="whitespace-nowrap px-6 py-4">{{ o.fullName }}</td>
      <td class="whitespace-nowrap px-6 py-4">{{ o.carName }}</td>
      <td class="whitespace-nowrap px-6 py-4">{{ o.phone }}</td>
      <td class="whitespace-nowrap px-6 py-4">{{o.email}}</td>
      <td class="whitespace-nowrap px-6 py-4">{{o.prev_offer}}</td>
    </tr>
    
  </tbody>
</table>
<button class="btn my-5 mx-auto"> <NuxtLink to="/cars">Go back</NuxtLink></button>
    </div>
</template>

<script setup>
const {data: offers} = await useFetch('http://localhost:3000/offers')
definePageMeta({
    layout: 'table'  
}) 
</script>

<style lang="scss" scoped>

</style>
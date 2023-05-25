<template>
    <div class="card">
        <div class="grid  grid-cols sm:grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="car.image" alt="product img" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-xl sm:text-4xl my-7">{{ car.Name }}</h2>
                <p class="text-xl my-7">Price - $10k</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">car description: </h3>
                <p class="mb-7">Fuel: {{ car.fuel_type }}</p>
                <p class="mb-7">Number 0f seats: {{ car.number_of_seat }}</p>
                <p class="mb-7">Type: {{ car.type }}</p>
                <div class="grid grid-cols-2 gap-7">
                <button class="btn ">
                    <NuxtLink to="/contact">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                    </NuxtLink>
                </button>
        <button class="btn "><NuxtLink to="/offers">Previous offers</NuxtLink></button>

            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {car} = defineProps(['car'])
//    props : defineProps({
//      car:{},
//      offer:{}
//    })
</script>

<style scoped>
 /* img {
    max-width: 400px;
 } */
</style>
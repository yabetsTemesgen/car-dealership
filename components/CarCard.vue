<template>
    <div class="card text-center">
        <img :src="car.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ car.Name }}</p>
        <NuxtLink :to="`/cars/${car.id}`">
            <p class="btn mb-0"> View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
   const { car } = defineProps(['car'])

</script>

<style scoped>
.thumb{
    /* max-height: 120px; */
    margin:0 auto;
    height: 200px;
    width: 400px;
}
</style>
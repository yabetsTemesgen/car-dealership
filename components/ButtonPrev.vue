<template>
    <div>
        <button class="btn "><NuxtLink :to="`/offers/${offer.carName}`">Previous offers</NuxtLink></button>
    </div>
</template>

<script>
   const { offer } = defineProps(['offer'])
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <p>{{ offer.fullName }}</p>
        <p>{{ offer.carName }}</p>
        <p>{{ offer.phone }}</p>
        <p>{{ offer.email }}</p>
        <p>{{ offer.prev_offer }}</p>
    </div>
</template>

<script setup>
    const {offer}= defineProps(['offer'])
</script>

<style lang="scss" scoped>

</style>
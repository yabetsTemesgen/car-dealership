<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oooops.</p>
        <p class="mt-7">{{error.message}}</p>
        <button @click="handleClearError" class="btn my-7">Go Home..</button>
    </div>
</template>

<script lang="ts" setup>
defineProps(['error'])
const handleClearError = () => clearError({redirect: "/"})
definePageMeta({
    layout: 'error'
 })
</script>

<style scoped>

</style>
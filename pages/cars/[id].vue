<template>
    <div>
        <Head>
            <Title>Car | {{ car.Name }}</Title>
            <Meta name="description" :content="car.fuel_type"/>
        </Head>
        <CarDetails :car="car"/>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    // const uri ='https://fakestoreapi.com/products/' + id
     const uri ='http://localhost:3000/cars/' + id
    const {data: car} = await useFetch(uri, {key:id})
    if(!car.value){
        throw createError({statusCode:404, statusMessage: 'Product not found', fatal:true})
    }
    definePageMeta({
    layout: 'cars'
 })

</script>

<style scoped>

</style>
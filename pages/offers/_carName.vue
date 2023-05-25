<!-- <template>
  <div>
    <Head>
      <title>Offer | {{ offer.carName}}</title>
      <meta name="description" :content="offer.prev_offer"/>
    </Head>
    <OfferDetails :offer="offer" />
  </div>
</template> -->
<template>
  <p>{{ offer.fullName }}</p>
  <p>{{ offer.carName }}</p>
  <p>{{ offer.phone }}</p>
  <p>{{ offer.email }}</p>
  <p>{{ offer.prev_offer }}</p>
</template>
<!-- <script setup>
    const {carName} = useRoute().params
    const url = 'http://localhost:3000/offers/' + carName
    const {data: offer} = await useFetch(url, {key:carName})
    if(!offer.value){
      throw createError({statusCode:404, statusMessage: `"Offers not fount for"+ {{carName}}`})
    }
    definePageMeta({
      layout: 'default'
    })
</script> -->

<script >
export default{

async asyncData({ params }) {
  const response = await this.$axios.get(`/offers?carName=${params.carName}`)
  return { offer: response.data }
}
}
</script>

<style lang="scss" scoped>

</style>
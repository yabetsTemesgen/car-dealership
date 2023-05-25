<template>
    <h1 class="text-4xl text-white font-bold text-center mb-4"> Put in an offer</h1>
    <div class="flex justify-center items-center w-full">
    <form class=" h-full sm:h-fit w-fit content-center">
        <label class="block text-gray-50 text-sm font-bold mb-2" for="id">Full Name:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.fullName"/> <br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="name">Car Name:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.carName"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="seat">Phone number:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.phone"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="typec">Email:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.email"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="fuel">Your Offer: $ </label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.prev_offer"/><br>

        <button class="btn my-4" type="button" @click="handleSubmit">send offer</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Contact',
    data(){
        return {
            formData:{
                fullName:  '',
                carName: '',
                phone: '',
                email: '',
                prev_offer: '',
            }
        }
        
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://localhost:3000/offers',{
                    fullName: this.formData.fullName,
                    carName: this.formData.carName,
                    phone: this.formData.phone,
                    email: this.formData.email,
                    prev_offer: this.formData.prev_offer
                })
                if(response.status === 200){
                    const responseData = response.data
                    this.$store.dispatch('contact/handleOffers', responseData)
                }
            } catch (error) {
                
            }
        }
    }
}
</script>

<template>
    <h1 class="text-4xl text-white font-bold text-center mb-4"> Add new Car</h1>
    <div class="flex justify-center items-center w-full">
    <form class=" h-full sm:h-fit w-fit content-center" @submit.prevent="handleSubmit">
        <label class="block text-gray-50 text-sm font-bold mb-2" for="id">Car ID:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md"  type="text" v-model="formData.id"/> <br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="name">Car Name:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.Name"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="seat">Number of Seat:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.number_of_seat"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="typec">Type:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.type"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="fuel">Fuel_Type:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.fuel_type"/><br>
        <label class="block text-gray-50 text-sm font-bold mb-2" for="image">Image URL:</label>
        <input class="border py-2 px-3 text-grey-darkest w-100 rounded-md" type="text" v-model="formData.image"/><br>
        <button class="btn my-4" type="submit">Add Car</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Add',
    data(){
        return {
            formData:{
                id:  '',
                Name: '',
                number_of_seat: '',
                type: '',
                fuel_type: '',
                image: ''
            }
        }
        
    },
    methods: {
      async handleSubmit(){
            try {
                const response = await axios.post('http://localhost:3000/cars',{
                    id: this.formData.id,
                    Name: this.formData.Name,
                    number_of_seat: this.formData.number_of_seat,
                    type: this.formData.type,
                    fuel_type: this.formData.fuel_type,
                    image: this.formData.image
                })
                if(response.status === 200){
                    const responseData = response.data
                    this.$store.dispatch('add/newCar',responseData)
                }
            } catch (error) {
                console.log(error)
            }
        }
       
    }
}
 // async handleSubmit() {
        //     const response= await useFetch('http://localhost:3000/cars', {
        //         method: 'POST',
        //         headers:{
        //             'Content-Type':'application/json'
        //         },
        //         body: JSON.stringify(this.form)
        //     })
        //     const data = await response.json();
        //     console.log(data)
        //     if (response) {
        //         alert(response.value);s
        //     }
        // }
</script>

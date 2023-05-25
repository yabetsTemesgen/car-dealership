// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr: false,
modules: ['@nuxtjs/tailwindcss'],
// css: [
//     '@fortawesome/fontawesome-svg-core/styles.css'
//   ],
app: {
    head:{
        title:"Cars in addis",
        meta :[
            {name:'description', content:'new cars in addis abeba'}
        ],
        link:[
            {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
    },
    
},


})

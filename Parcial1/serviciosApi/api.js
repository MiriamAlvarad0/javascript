const app = Vue.createApp({
    data() {
        return {
            amiibos:[],
            videojuego:[]

        }

    },
    methods:{
       async  obtener(){ /* await en el metodo de obtner, tiene que estar antes escrito async para ser promise*/
            const data = await fetch('https://amiiboapi.com/api/amiibo/',{
                method:'GET' 
            });

            const amiibos=await data.json(); /* json equivale toda la informacion del url*/
            this.amiibos=amiibos.amiibo;
            console.log(this.amiibos);

        },
       
    },
})


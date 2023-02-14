Vue.createApp({
    data(){
        return {
           pokemon: null
        }
    },
    methods:{
        async getPokemon(){
            // get obtener
            // post crear recursos
            // put modificar recusos
            // delete eliminar recursos

            const random=Math.floor(Math.random()*200); //math.floor es para que de entero, porq el math random da decimal!!
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+random,{
                method:"GET"
            });


            const data = await response.json();
            this.pokemon=data;
        } 
    }
   
}).mount("#app")
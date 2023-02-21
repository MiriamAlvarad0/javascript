Vue.createApp({
    data(){
        return {
            pokemones: []
        }
    },
    mounted(){ //solo se actualiza la pagina y muestra los pokemones sin necesidad de usar el boton
        this.getPokemon();
    },
    methods:{
        async getPokemon(){
            // get obtener
            // post crear recursos
            // put modificar recusos
            // delete eliminar recursos
            var i = 1;
            while(i<=200){
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+i,{
                    method: "GET"
                });
                const pokemon= await response.json();
                this.pokemones.push(pokemon);
                i++;

                //const random=Math.floor(Math.random()*200); //math.floor es para que de entero, porq el math random da decimal!!
                //const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+random,{
                    //method:"GET"
                //});
               
            }

        } 
    }
   
}).mount("#app")
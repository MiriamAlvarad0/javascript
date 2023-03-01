Vue.createApp({
    data(){
        return {
            bebidas: [],
            loading: null,
            nombre: ""
        }
    },
    /* mounted(){ //solo se actualiza la pagina y muestra los pokemones sin necesidad de usar el boton
        this.getBebida(); */
    
    methods:{
        async getBebida(){
            this.loading=true;
            // get obtener
            // post crear recursos
            // put modificar recusos
            // delete eliminar recursos   
                const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.nombre ,{
                    method: "GET"
                });
                const bebida= await response.json();
                this.bebidas = bebida['drinks'];

            /* this.loading=false; */
        } 
    }
   
}).mount("#app")
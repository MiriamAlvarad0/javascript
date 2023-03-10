Vue.createApp({
    data(){
        return{
            pokemones: [],
            loading: null,
            pokemonImagen:'',
            exp:'',
            altura:'',
            peso:'',
            habilidad: '',
            habilidad2: '',
            indice: '',
            move: '',
            move2: '',
            move3: '',
            stats: '',
            nom: ''
          
            
            
           
           


        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        async getPokemon(){ 
            //async funcion acirncrona, le dices que no importa que no se quede estancada la pagina
            //GET (OBTENER RECURSOS)
            //POST (PARA CREAR RECURSOS)
            //PUT (MODIFICAR RECURSOS)
            //DELETE (ELIMINAR RECURSOS)
            //const random = Math.floor (Math.random() * 200); +random
            this.loading = true;

            var i = 1;

            while (i <= 200)
            {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i,{
                    method: 'GET'
                });
                const pokemon = await response.json();
                 console.log(pokemon);
                this.pokemones.push(pokemon);

                 i++;

             }
             this.loading = false;

        },mostrarPokemon(pokemon){
           console.log(pokemon) 
            
          
            $('#myModal').modal('show');
           
            this.nom = pokemon.name
            this.pokemonImagen = pokemon.sprites.other.dream_world.front_default
            this.exp= pokemon.base_experience
            this.altura = pokemon.height
            this.peso = pokemon.weight
            this.habilidad = pokemon.abilities[0].ability.name
            this.habilidad2 = pokemon.abilities[1].ability.name
            this.indice = pokemon.game_indices[3].game_index
            this.move = pokemon.moves[27].move.name
            this.move2 = pokemon.moves[75].move.name
            this.move3 = pokemon.moves[83].move.name
            
            
            
            
           
            
            
          

            
           
        }

    },
   
    
}).mount('#app')
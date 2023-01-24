Vue.createApp({
    data(){
        return {
            carrito:[
                "Soda",
                "Tomate",
                "Sal",
                "Limones"
            ],
            producto: ""
        }
    },
    methods:{
        agregarProducto(){
           this.carrito.push(this.producto);
           this.producto=""; 
        }
    }
   

}).mount("#app")
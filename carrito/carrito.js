Vue.createApp({
    data(){
        return {
        productos:[
            {
                nombre:"",
                precio: "",
                cantidad: "",
                productos: []
            },
            
        ]
        }
    },
        methods: {
            agregar(){
                const producto = {
                    nombre: this.nombre,
                    precio: this.precio,
                    cantidad: this.cantidad
                }
                this.productos.push(producto);
            }
        },
    
    
   

}).mount("#app")


/*Vue.createApp({
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
   

}).mount("#app")*/


Vue.createApp({
    data(){
        return{
            nombre:"limon",
                precio: "",
                cantidad: "",
                fecha: "",
                descripcion: "",
                peso:"",
                productos: []
        }
    },
    methods: {
        agregar(){
            const producto = {
                nombre: this.nombre,
                    precio: this.precio,
                    cantidad: this.cantidad,
                    fecha: this.fecha,
                    descripcion: this.descripcion,
                    peso:this.peso
            }

            this.productos.push(producto);
        }
    }
}).mount("#app")



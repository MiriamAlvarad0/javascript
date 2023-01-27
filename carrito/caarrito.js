Vue.createApp({
    data(){
        return{
            colortable:"info",
            nombre:"",
                precio: "",
                cantidad: "",
                fecha: "",
                descripcion: "",
                peso:"",
                url:"",
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
                    peso:this.peso,
                    url:this.url
            }

            this.productos.push(producto);
        }
    }
}).mount("#app")



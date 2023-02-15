Vue.createApp({
    data(){
        return {
            nombre: "",
            carrera: "",
            edad:"",
            resultado:""
        }
    },
    methods: {
        calcularEdad(){
            if(this.edad>=18){
            this.resultado="Eres mayor de edad"
            
            }else{
                this.resultado="Eres menor de edad"
            }
        }
    }
   

}).mount("#app")
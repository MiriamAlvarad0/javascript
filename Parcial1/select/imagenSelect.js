/*Hacer un select con 5 opciones, cuando seleccionen una opción
 les mostrar una imagen respectiva a la opción seleccionada*/
 Vue.createApp({
    data(){
        return {
         imagen:""
       
        }
    },
    computed:{
        imagenes(){
            if(this.imagen=="manzana"){
                return "https://www.cuerpomente.com/medio/2020/11/10/manzana_a1c5bdb0_1200x1200.jpg";
            }else if (this.imagen=="uva"){
                return "https://lossaboresdemexico.com/wp-content/uploads/2012/11/1ca887411c1d1264ecfed1b7ec2ec5a9.jpg";
            }else if(this.imagen=="pera"){
                return "https://diarioroatan.com/wp-content/uploads/2018/08/pera.jpg";
            }else if(this.imagen=="zana"){
                return "https://image.made-in-china.com/2f0j10TvDEZkeahnuK/-Zanahoria-fresca-nuevos-cultivos-.jpg"
            }else if(this.imagen=="cebo"){
                return "https://greens.com.gt/wp-content/uploads/2020/04/Cebolla-Blanca.jpg"
            }else{
                return "";
            }
        }
    }
   

}).mount("#app")
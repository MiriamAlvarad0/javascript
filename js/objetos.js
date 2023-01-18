const miriam ={
    nombre:"Miriam",
    email:"miri@gmail.com",
    password:"123",
    edad: 19,
    altura: 1.65,
    cumple:"18 de septiembre",
    year: 2003


}

/* const nombre= miriam.nombre;
const email= miriam.email;
const edad= miriam.edad;
const altura= miriam.altrura;
const cumple= miriam.cumple;
const year= miriam.year; */

const {nombre,email,edad,altura,cumple,year}=miriam;
console.log(`Hola mi nombre es ${nombre} mi email es ${email} mi edad es ${edad} mi altura es ${altura} mi cumpleanos es ${cumple} y naci en ${year}`);
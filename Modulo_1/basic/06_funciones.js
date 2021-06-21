// node 06_funciones.js

/*FUNCIONES DECLARATIVAS */

function saludar(){
    return "hola soy Dennis";
}
function saludar2(){
    console.log("Hola soy David")
}
//FUNCIONES CON PARAMETRSO//
function saludarconparametros(nombre,apellido){
    
    return `Hola soy ${nombre} ${apellido}`
}

// funciones con parametrospor defecto

function saludoConProfesion(nombre="Persona", profesion = "Analista de sistemas"){
    return `Hola ${nombre} mi profesion es ${profesion}`
}
//console.log(saludoConProfesion("Dennis", "Desarolllador de software"))


//console.log(saludarConParametros("Dennis", "David"));



/*
//saludar()
var resultado=saludar()
console.log(resultado)
console.log(saludar())
saludar2()
*/

//FUNCIONES EXPRESIVAS

var saludoconedad=function(nombre,edad){
return `Hola soy ${nombre} y tengo ${edad} años`
}
//console.log(saludoconedad("Dennis",27))

/*ARROW FUNCTIONS -FUNCIONES FLECHA
*/
var saludoconapellido=(nombre,apellido)=>`Hola soy ${nombre} ${apellido}`
/*
//void
var saludoconapellido=(nombre,apellido)=>{
    console.log(`Hola soy ${nombre} ${apellido}`)
}
*/

var suma=(num1,num2)=> num1+num2

//console.log(saludoconapellido("Dennis","Dvid"));
//console.log (suma(2,3))

//FUNCIONES CON PARAMETROS DE OTRAS FUNCIONES

//cb=colbag-funcion
function saludoconFunciones(nombre, cb){
    return cb(nombre)
}

var miSaludo = saludoconFunciones("Juan", function(nombre){
    return `Hola soy ${nombre}`
})
//console.log(misaludo);

var miSaludo2 = saludoconFunciones("Juan", (nombre) => `Hola soy ${nombre}`)
//console.log(miSaludo2);

/*
setTimeout(() => {
    console.log("Hola mundo")
}, 3000);
*/
setInterval(() => {
    console.log("Hola mundo")
}, 2000);


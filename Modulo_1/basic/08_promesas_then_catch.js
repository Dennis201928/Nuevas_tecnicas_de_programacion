// node 08_promesas_then_catch.js

//PROMESAS


function promesa(bandera){
    return new Promise((resolve,reject)=>{
    if (bandera) {
        setTimeout(()=>{ 
            resolve("Peticion resuelta");
            
        },3000);
    }else{
        setTimeout(()=>{ 
            reject("Operacion Fallo")
            
        },2000);
       
    }
        
    })
}
//.then nos retorna valor correctamente y si algo falla lo controla el .cathc
/*
promesa(true)
    .then((resultado)=>{
        console.log("RESPUESTA POSITIVA: ",resultado)
    })
    .catch((error)=>{
        console.log("ERROR",error);
    })
*/

var segundaPromesa = (bandera) => new Promise (( resolve, reject) => {
    if (true) {
        setTimeout(() => {
        resolve("Peticion resulta");
    }, 3000);
    } else {
        setTimeout(() => {
        reject("La operacion Fallo");
    }, 2000);
    }
})
segundaPromesa(true)
    .then((resultado)=>{
        console.log("Respuesta positiva*", resultado);
    })
    .catch((error) => {
        console.log("Error", error);
    })

promesa(true)//peticion de clientes
    .then((respuesta)=>{//respuesta de vista de clientes
        console.log("Respuesta positiva", respuesta);
        return segundaPromesa(true)//compras del cliente
    })
    .then((respuesta)=>{//respuesta de la segunda promesa
        console.log(respuesta);
    })
    .catch((error) => {
        console.log("Error", error);
    })
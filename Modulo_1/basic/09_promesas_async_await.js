//node 09_promesas_async_await.js

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

(async()=>{
    try {
        var respuesta=await promesa(true)
        var respuesta2=await promesa(true)
        console.log(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.log(error)
    }
})()
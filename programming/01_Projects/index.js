
const { Router } = require('express');
const express = require('express');
//genero una aplicacion express

const app = express()
// routes
const { RouterIndex } = require('./routes/index')
/*
app.use("/", RouterIndex)
app.use("/user", RouterIndex)
app.use("/user/data", RouterIndex)
*/



/* 
DEBER
*/

app.use("/deber-video", RouterIndex)
app.use("/", RouterIndex)



/*
"/"+"/"="//" => "/"
"/"+"/nick" => "//nick" ="/nick"
"/"+"/apellido" =>"//apellido"="/apellido"

"/user"+"/nick"=>"/user/nick"
"/user/data"+"/apellido"=>"/user/data/apellido"


*/




/*
        "/"+"/"="//" => "/"
        "/"+"saludo" = "//Saludo" => "/saludo"
        "/"+ "'/saludo/:nombre'" = //saludo/:nombre => "/saludo/:nombre"
        "/user" + "/saludo" = "/user/saludo"
        "user/data" + "/saludo" = "/user/data/saludo"
*/

app.listen(3000, ()=>{
    console.log("Servidor escuchando en htpp://localhost:3000");
})
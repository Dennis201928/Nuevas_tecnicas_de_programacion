
//node index.js
const express = require('express');


//genero una aplicacion express

const app = express()
// endpoint 
app.get('/',(req, res) => {
    res.send("Hola mundo con ExpressJS")
})

app.get("/saludo",(req,res)=>{
    //req.query
    //console.log(req.query);
    //obtenemos la query del objeto request
    
    // const{query}=req;
    const{query:{nombre,apellido}}=req;
    

    //const nombre=req.query.nombre
    //const apellido=req.query.apellido
    
    res.json({
        //saludo:`hola soy ${query.nombre} ${query.apellido}`
        saludo:`hola soy ${nombre} ${apellido}`
    })
})

app.get('/saludo/:nombre', (req, res) =>{
    //http://localhost:3000/saludo/Dennis
    const { params: { nombre } } = req
    //console.log(req.params);
    res.json({
        // nombre: nombre = req.params.nombre
        nombre: nombre
    })
})

app.listen(3000, ()=>{
    console.log("Servidor escuchando en htpp://localhost:3000");
})
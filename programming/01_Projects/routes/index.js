//traemos el paquete

const { Router } = require('express');

//inicializamos el router

const router = Router()

//creacion de los endpoint
router
    .get("/",(req, res) => {
        //http://localhost:3000/
    res.send("Hola mundo con ExpressJS");
    })
    .get("/saludo",(req, res) =>{

        const { query: {nombre, apellido} } = req;
        res.json({
            saludo:` Hola soy ${nombre} ${apellido}`,
            //http://localhost:3000/saludo?nombre=Dennis&apellido=Quiguire
        });
    })
    .get('/saludo/:nombre', (req, res) =>{
        const { params: { nombre } } = req
        console.log(req.params);
        res.json({
            //http://localhost:3000/saludo/:Dennis
            nombre: nombre,
        })
    })



//exportamos la rutas
module.exports.RouterIndex = router

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
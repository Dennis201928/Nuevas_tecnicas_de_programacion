//traemos el paquete

const { Router } = require("express");
const data = require(`../data.json`);
const {datavalidator} = require('../middleware/DataValidator')
const { User } = require("../lib/Schema/User");
//inicializamos el router
///
const router = Router();
/*
DEBER
*/
/*
router
  .get("/user", (req, res) => {
    // http://localhost:3000/deber-video/user
    var modifiedData = data.map((person) => {
      person.first_name = person.first_name.toUpperCase();
      person.last_name = person.last_name.toUpperCase();
      return person;
    });
    res.json({
      msg: "LISTADO DE USUARIOS",
      body: data,
    });
  })

  .get("/users-query", (req, res) => {
    //http://localhost:3000/deber-video/users-query?id=3
    const {
      query: { id },
    } = req;
    var ides = data.filter((id_person) => id_person.id == id);

    if (ides == false) {
      res.json({
        msg: "Lista Por ID",
        body: data,
      });
    } else {
      res.json({
        msg: "Lista Por ID",
        body: ides,
      });
    }
  })

  .get("/users-params/:apellido", (req, res) => {
    // http://localhost:3000/deber-video/users-params/Elgood

    const {
      params: { apellido },
    } = req;
    var correo = data
      .filter((traer) => traer.last_name == apellido)
      .map((result) => {
        return result.email;
      });
    if (correo == false) {
      res.json({
        msg: "No se encontro el apellido solicitado",
        body: [null],
      });
    } else {
      res.json({
        msg: "CONSULTA POR APELLIDO",
        body: [{ Email: correo }],
      });
    }
  });
*/
//creacion de los endpoint

router
    .get("/",(req, res) => {
        //http://localhost:3000/
    res.send("Hola mundo con ExpressJS");
    })
    .get("/user",(req, res) => {
        res.json({
        msg:"LISTADO DE USUARIOS",
        body:data,
        })
    })
    
    .get("/saludo", datavalidator("query", User),(req, res) =>{

      const { query: {nombre, apellido} } = req;
      res.json({
          saludo: `Hola soy ${nombre} ${apellido}`,
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
module.exports.RouterIndex = router;

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }

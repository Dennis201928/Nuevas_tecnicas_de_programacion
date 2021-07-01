//contexto de guardado en la nube
//contexto de nube
const {MongoClient}=require("mongodb");

const DB_NAME="Clients"
const URL=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@modulo2.d7g1o.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

var MongoConnection=()=>new Promise(async(resolve,reject)=>{
    try {
        let client =new MongoClient(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        await client.connect()
        resolve(client.db(DB_NAME))



    } catch (error) {
        reject(error)
    }


})
//Continuara
module.exports.MongoConnection=MongoConnection;
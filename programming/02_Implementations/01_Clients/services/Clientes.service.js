const{MongoConnection}=require('../lib/Mongo');

//collection
const COLLECTION="clients"

const findUsers=()=>new Promise(async(resolve,reject)=>{
    try {
        //incializo mongo client para que me retorne la 
        //configuracion de la db
        const DB= await MongoConnection();
        //obtenemeos la collection
        const clients=DB.collection(COLLECTION);
        const clientsList=await clients.find({}).toArray();
        resolve(clientsList);
    } catch (error) {
        reject(error)        
    }
});

module.exports={
    findUsers,
}





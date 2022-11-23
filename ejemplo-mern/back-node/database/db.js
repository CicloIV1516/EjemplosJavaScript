import mongoose from 'mongoose';
//const url = 'mongodb://localhost:27017/marketPlace';

const url = 'mongodb+srv://luisfelipe2022:luisfelipe2022@cluster0.inznx5j.mongodb.net/marketPlace?retryWrites=true&w=majority'

mongoose.connect(url);

const db = mongoose.connection;
db.on('open', ()=>{
    console.log("¡La conexión a MongoDB fue exitosa!");
});
db.on('err', ()=>{
    console.log("¡Error al conectar a MongoDB!");
});

export default db;


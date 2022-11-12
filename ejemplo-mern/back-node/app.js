import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/routes.js';

const app = express();
const port = 3001;

//microservicios
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/products', router);

app.listen(port, ()=>{
    console.log(`Servidor UP corriendo en http://localhost:${port}/`);
});
//importamos express de las librerías que antes instalamos con npm i --save express
const express = require('express'); 
//en app invocamos o llamamos TODA la función que tiene guardada express
const app = express();
//configuro el puerto del servidor
const port = 3001; 

//hacemos las solicitudes en este caso con el método get
//tiene dos parámetros:
//la url y luego la función con las variables de requerir y responder 
app.get('/', (req, res)=>{
    res.send('Esto es un ensayo de servidor');
})

app.listen(port, ()=> {
    console.log('El ensayo se ejecutó con éxito!')
    });
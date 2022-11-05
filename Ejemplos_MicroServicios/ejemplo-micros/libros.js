const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

let libros;

libros = [
    {
        "nombre": "Cien años de soledad",
        "precio": 50000
    },
    {
        "nombre": "El principito",
        "precio": 40000
    }
];

app.use(cors());
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/libros', (req, res)=>{
    res.json(libros);
});


app.listen(port, ()=>{
    console.log(`La app de los libros se está ejecutando`);
});
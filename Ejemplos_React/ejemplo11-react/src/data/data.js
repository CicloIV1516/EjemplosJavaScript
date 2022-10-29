var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

//crear una base de datos con la primera colección
/*MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("ejemplo11");
    dbo.createCollection("productos", function(err, resultado){
        if (err) throw err;
        console.log("Base de datos y colección creada con éxito!");
        db.close();
    });
});
*/


//como trabajamos con documentos BSON para almacenar registros
/*MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("ejemplo11");
    var documento1 = {id: 1, etiqueta: "Yuca", precio: 3000, desc: "Precio alto"};
    dbo.collection("productos").insertOne(documento1, function(err, resp){
        if (err) throw err;
        console.log("Documento insertado con éxito!");
        db.close();
    });
});
*/
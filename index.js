const express = require('express')
// Creamos una instancia de app
// http y https
const app = express()

// CONEXIÓN A MONGO ATLAS A TRAVÉS DE UN SECRETO (UNA VARIABLE DE ENTORNO)
const mySecret = process.env['MONGO_URI'];
// IMPORTAMOS LA LIBRERIA MONGOOSE
const mongoose = require('mongoose');
// IMPORTAMOS EL ESQUEMA DEL MODELO
// El modelo es el cjto de datos que va a crear en la BD
const producto = require('./Product');
// crear el 1er objeto que vamos a guardar en BD
var objProducto = [{
  titulo: "Tenis Nike Air",
  precio: "1000",
  descripcion: "Los tenis de Jordan",
  categoria: "Zapatos deportivos",
  imagen: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/01f45cdb-64b2-41a9-918e-f2fe43a50cfa/custom-nike-air-force-1-high-by-you-shoes.png"
}];
// AHORA CONECTAMOS LA BD
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error)
  }
}
connectDB()
// AHORA VAMOS A ALMACENAR EL OBJETO objProducto EN LA BD 
const almacenarObjetos = async () => {
  try {
    //await producto.create(objProducto);
    await producto.insertMany(objProducto, { options: { timeout: 3000 } });
    console.log("Objeto almacenado en la BD creada")
  } catch (error) {
    console.log(error)
  }
}
// AHORA EJECUTAMOS LA FUNCIÓN ALMACENAR OBJETOS
almacenarObjetos();

// POST = enviar desde el front a este servidor data
// habilitamos la API para recibir tipos de datos JSON
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// con este get desde postman obtenemos la data.js
/*const test = require('./data');
app.get('/products', (req, res) => res.json({ total: test.length, status: 200, test }));*/

/*var axios = require('axios');
var data = JSON.stringify({
    "collection": "listingsAndReviews",
    "database": "sample_airbnb",
    "dataSource": "ClaseMongo2023",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'get',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-nvbuo/endpoint/data/v1/action/findAll',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '8GTCJTnP5LNAtamUQrhhk14iyNYJnVyuaUD6TbXAKjXgXRmbZb51sQDJChV6eYCv',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });*/

app.listen(3000)

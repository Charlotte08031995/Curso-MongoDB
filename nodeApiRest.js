//Acorde a la fake API

const express = require('express')
// Creamos una instancia de app
// http y https
const app = express()

// API = recibe las peticiones  = requests externos
// GET
app.get('/', function (req, res) {
  res.send('Hola Clase')
})

// POST = enviar desde el front a este servidor data
// habilitamos la API para recibir tipos de datos JSON
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/enviardata',  (req, res) => {
  // recibimos el body enviado desde el front
  let data = req.body;
  // enviamos respuesta al front
  res.send('Data recibida en el servidor: ' + JSON.stringify(data) )
})

// con este get desde postman obtenemos la data.js
const test = require('./data');
app.get('/products', (req, res) => res.json({ total: test.length, status: 200, test }));

app.listen(3000)

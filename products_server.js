const express = require("express"); //WEB SERVER FRAMEWORK
const bodyParser = require('body-parser')
const fs = require('fs'); //FILE SYSTEM FOR "DATABASE"

const app = express(); //CREATE INSTANCE OF WEB SERVER
//ADD THE JSON PLUGIN FOR THE SERVER
app.use(express.json({extended: true, limit: '1mb'}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
   
//MAP A ROUTE (Endpoint to Function, e.g. GET / => lambda)
app.get('/', (req, res) => res.sendfile("index.html") );

//MAP A ROUTE. (GET /products => lambda)
app.get('/products',(req, res) => {
  //READ JSON TEXT FILE, CONVERT TO DATA, THEN CONVERT TO JSON RESPONSE.
  res.json(JSON.parse(fs.readFileSync('products.json')))
});

//POST A NEW RECORD
app.post('/products', (req, res) => {
    let text = req.body;
    let existing = JSON.parse(fs.readFileSync('products.json'))
    existing.push(text);
    fs.writeFileSync('products.json', JSON.stringify(existing));
  res.json(text);
})

//DELETE A RECORD
app.delete('/products', (req, res)=>{
  let text = req.body;
  let existing = JSON.parse(fs.readFileSync('products.json'))
  existing = existing.filter(p=>p.name != text.name); //Keep all but this one
  fs.writeFileSync('products.json', JSON.stringify(existing));
  res.json(text); //Echo back the removed item
})

//BEGIN LISTENING FOR WEB REQUESTS ON PORT 8081
app.listen(8081, () => console.log("Started on PORT http://127.0.0.01:8081/products/"));
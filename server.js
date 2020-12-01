
/* Empty JS object to act as endpoint for all routes */

projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('test-project'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    //console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
/*
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};*/

// POST route
/*app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}*/
/*
// POST an animal
const data = [];
console.log(data);
app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};*/

// from another lesson - faking url example

const fakeData = {
    animal: "lion",
    fact: "lions are fun"
}

app.get("/fakeAnimalData", getFakeData);

function getFakeData(req, res) {
    console.log("getFakeData is running");
    res.send(fakeData);
    console.log("fakedata",fakeData);
}

const animalData = [];

app.get("/all", getData);

function getData(req, res) {
    res.send(animalData);
    console.log("/all animal data", animalData);
}

//POST route
app.post('/addAnimal', addAnimal);

function addAnimal(req, res){
    //console.log("request", req.body);
    newEntry = {
      animal: req.body.animal,
      facts: req.body.fact,
      fav: req.body.fav
    }
    //console.log(req.body.fav);
    animalData.push(newEntry);
    console.log(animalData);
    res.send(animalData);
    //console.log(animalData);
    //console.log(newEntry);
    //req.send(animalData);
    //console.log(animalData);
}
// From another lesson ends
// Chaining promises

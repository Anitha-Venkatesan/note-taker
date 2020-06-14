// Dependencies
let express = require("express");
let path = require("path");
let fs = require("fs");
let lodash = require("lodash");

// Setting  up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//Creating an API routes 
app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
  console.log("Getting the Json file");
});

//Creating an html routes
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Create New notes - takes in JSON input
app.post("/api/notes", function (req, res) {
  const dbJson = fs.readFileSync('./db/db.json', 'utf-8');
  const jsonData = JSON.parse(dbJson);
  req.body.id = jsonData.length + 1;
  jsonData.push(req.body);
  fs.writeFileSync("./db/db.json", JSON.stringify(jsonData));
  res.json(req.body);
});
//Deleting a notes using unique id
app.delete("/api/notes/:id", function (req, res) {
  const dbJson = fs.readFileSync('./db/db.json', 'utf-8');
  const jsonData = JSON.parse(dbJson);
  let id = req.params.id;
  console.log(id);
  const newJsonData = lodash.reject(jsonData, {'id': Number(id) });
  console.log("newJsonData");
  console.log(newJsonData);
  fs.writeFileSync("./db/db.json", JSON.stringify(newJsonData));
  res.end();
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

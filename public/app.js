// Dependencies
let express = require("express");
let path = require("path");
let fs= require("fs");

// Setting  up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Creating an html routesß
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//Creating an API routes 
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

// Create New notes - takes in JSON input
app.post("/api/notes", function(req, res) {
  var newNotes = req.body;
  console.log(newNotes);
  res.json(newNotes);
  fs.appendFile("../db/db.json", JSON.stringify(newNotes), function (){
    res.end();
  });
});
// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

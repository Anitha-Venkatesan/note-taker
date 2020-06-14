# note-taker
### Description
* An application that can be used to write, save, and delete notes uses an express js as an backend and save and retrieve note data from a JSON file.
* fs module is used to store and retrieve notes from the db.json file on the backend
* Created html routes localhost:3000/notes and api routes localhost:3000/api/notes
* GET /api/notes - read the db.json file and return all saved notes as JSON.
* POST /api/notes - receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
* DELETE /api/notes/:id - Added unique id to each note when saved, inorder to remove the note.

### Installation
Steps to install the node npm packages
* npm i

### Dependencies
* express
* lodash
* fs
Note: They already included in npm package.json

### Usage
* `git clone git@github.com:Anitha-Venkatesan/note-taker.git`
* `cd note-taker`
* Open app.js in Command Line Terminal using the command `node app.js`

### Screenshots
### References
* https://expressjs.com/en/4x/api.html#app
* https://lodash.com/docs/4.17.15

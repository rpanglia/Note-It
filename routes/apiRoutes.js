const express = require('express');
const fs = require('fs');
const db = require('./../db/db.json');
const { v4: uuidv4 } = require('uuid');

const apiRouters = express.Router();


//GET
apiRouters.get('/api/notes', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, file) => {
        if (err) throw err;

        const apiFile = JSON.parse(file);
        return res.send(apiFile);

    });
});


//POST
apiRouters.post('/api/notes', (req, res) => {

    let newNote = req.body; //can be reassigned
    newNote['id'] = uuidv4();
    newNote['title'] = req.body.title;
    newNote['text'] = req.body.text;

    fs.readFile('./db/db.json', 'utf8', (err, file) => {
        if (err) throw err;

        const addNotes = JSON.parse(file);
        addNotes.push(newNote);

        const allNotes = JSON.stringify(addNotes);

        fs.writeFile('./db/db.json', allNotes, 'utf8', (err) => {
            if (err) throw err;
            console.log("Added new note successfully");
        });

        return res.send(JSON.parse(allNotes));
    });

});


//DELETE
apiRouters.delete('/api/notes/:id', (req, res) => {

   fs.readFile('./db/db.json', 'utf8', (err, file) => {
        if (err) throw err;
 
        let removeNote = req.params.id; //can be reassigned
 
        const addNotes = JSON.parse(file);
        const combinedNotes = addNotes.filter(elem => elem.id != removeNote);
 
        const allNotes = JSON.stringify(combinedNotes);
        fs.writeFile('./db/db.json', allNotes, 'utf8', (err) => {
            if (err) throw err;
            console.log("Note deleted successfully");
        });
       
        return res.send(JSON.parse(allNotes));
 
    });

});


module.exports = apiRouters;
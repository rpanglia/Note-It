const express = require('express');
const fs = require('fs');
const db = require('./../db/db.json');
const { uuid } = require('uuidv4');

const apiRouters = express.Router();
// let notes = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json')));

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

    // const newNote = req.body;
    // newNote.id = uuidv4();
    // notes = 

    // let noteId = uuid();
    // let newNote = {
    //     id: noteId,
    //     title: req.body.title,
    //     text: req.body.text
    // };

    let newNote = req.body;
    newNote['id'] = Date.now();
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


//DELETE to be added here



module.exports = apiRouters;
const express = require('express');
const fs = require('fs');

const apiRouters = require('express').Router();

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

    let noteId = uuid();
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
    };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
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
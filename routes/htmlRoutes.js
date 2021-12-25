const express = require('express');
const path = require('path');


const htmlRouters = require('express').Router();


htmlRouters.get('/notes', (req,res) => {res.sendFile(path.join(__dirname, '../public/notes.html'))});
htmlRouters.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../public/notes.html'))});

htmlRouters.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'))});

module.exports = htmlRouters;
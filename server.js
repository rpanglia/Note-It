// Dependencies
const express = require('express');


// Express app setup
const app = express();
const PORT = process.env.PORT || 3001;

// Express app to handle parsing of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




// Server listening
app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});
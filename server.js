// Dependencies
const express = require('express');


// Express app setup
const app = express();
const PORT = process.env.PORT || 3001;

const apiRouters = require('./routes/apiRoutes');
const htmlRouters = require('./routes/htmlRoutes');


// Express app to handle parsing of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use(apiRouters);
app.use(htmlRouters);




// Server listening
app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});
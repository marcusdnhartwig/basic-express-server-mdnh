'use strict';

const express = require('express');
const req = require('express/lib/request');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');

// Must export an object with a start() method
//          (it should not start on it’s own) and a reference to the express app.
// Create the /person route within your server.js
// This route should use the validator middleware to check the user’s input
// If valid, send a JSON object through the response with the name value in it
    // i.e. {name: "fred" }

app.get('/person', validator, (req, res) => {
    let { name } = req.query;
    let object = {
        name: name,
    }
    res.status(200).json(object);
});

app.use('*', notFoundHandler);

app.use(serverErrorHandler);
module.exports = {
    server: app,
    start: () => app.listen(PORT, () => console.log(`Running on port ${PORT}`)),
};

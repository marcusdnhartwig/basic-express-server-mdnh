'use strict';

//Sends a 404/Not-Found message as the response

function notFoundHandler (req, res, next) {
    res.status(404).send('Not Found');
}

module.exports = notFoundHandler;

// Import this into your server and set it up to be “used” after your other routes

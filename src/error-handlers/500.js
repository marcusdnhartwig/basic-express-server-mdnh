'use strict';

//Sends a 500/Server Error message as the response

// Import this into your server and set it up to be “used” as the last route

module.exports = funciton (err, req, res, next); {
    const error = err.message ? err.message : err;
    res.status(500).send(error);
};

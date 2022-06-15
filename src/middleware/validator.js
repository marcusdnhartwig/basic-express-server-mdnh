'use strict';

// Checks the query string for a name property

// Sends the request through when valid, forces an error when not
function validateQuery(req, res, next) {
    let { name } = req.query;
    if (!name) {
        next('Please enter a name query parameter like this:  /hello?name=Marcus');
    } else {
        console.log('name:', name);
    }
    next();
}

module.exports = validator;
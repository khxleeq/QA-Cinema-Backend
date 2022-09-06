"use strict";

let middleware = {
    logError: (err, req, res, next) => {
        console.log(err.stack);
        next(err);
    },
    sendError: (err, req, res, next) => {
        res.status(500).send(err.message);
    }
}

module.exports = middleware;
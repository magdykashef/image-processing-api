"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var date = new Date();
    console.log({
        date: date.toLocaleString(),
        method: req.method,
        url: req.url,
        queryParams: req.query,
    });
    next();
};
exports.default = logger;

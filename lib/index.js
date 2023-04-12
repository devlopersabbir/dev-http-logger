"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = function (_a) {
    var origin = _a.origin, showHeader = _a.showHeader;
    return function (req, res, next) {
        var authHeader = req.headers.authorization;
        var method = req.method;
        var path = req.path;
        var statuscode = res.statusCode;
        var isOrigin = origin
            ? req.headers.origin
            : null;
        var isHeader = showHeader ? authHeader : null;
        var logMessage = [
            "\x1b[31m============== dev-http-logger ===============\x1b[31m",
            isOrigin || isHeader ? "\u001B[35m".concat(isOrigin || isHeader, "\u001B[35m") : "",
            "\u001B[37m".concat(method, "\u001B[37m \u001B[33m").concat(path, "\u001B[33m \u001B[36m").concat(statuscode, "\u001B[0m"),
            "\x1b[31m============== dev-http-logger ===============\x1b[31m",
        ]
            .filter(Boolean)
            .join("\n");
        console.log(logMessage);
        next();
    };
};
exports.Logger = Logger;

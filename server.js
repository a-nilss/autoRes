/**
 * Created by anilsson on 9/2/14.
 */

var http = require('http');
var static = require('node-static');

var folder = new(static.Server)('./testResults');

http.createServer(function (req, res) {
    req.addListener('end', function () {
        folder.serve(req, res);
    });
}).listen(3010);

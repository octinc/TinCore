var express = require('express');
var app = express();

app.get('/test', function (req, res) {
    res.sendFile(__dirname + "/" + "test.html");
});

app.get('/tincore.js', function (req, res) {
    res.sendFile(__dirname + "/" + "tincore.js");
});

app.get('/tincore.css', function (req, res) {
    res.sendFile(__dirname + "/" + "tincore.css");
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);

});
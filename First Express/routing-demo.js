//Mar Brent Supan
//2075 - WCSERVER
var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log("There is GET request for the homepage!");
    res.send("Here is the GET Method!");
})

app.post('/', function(req, res){
    console.log("A POST request for the homepage is accessed.");
    res.send("Here is the POST METHOD");
})

app.get('/list_user', function(req,res){
    console.log("Got a GET request for /list_user");
    res.send("This is Page Listing");
})

app.get('/ab*cd', function(req,res){
    console.log("Got a GET request for /ab*cd");
    res.send("Pattern Match Page");
})

app.get('/student', function(req,res){
    console.log("Got a GET request for /student");
    res.send("The student name is Mar Brent Supan from WD-201!");
})

var server = app.listen(4000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s,", host, port)
})
//Name: Mar Brent B. Supan
//App Name:
//Description:

var express = require("Express");

var app = express();

app.get("/", function(req, res){
    res.send("Sucessfully created the second App!");
});
var server = app.listen(2001, function(){
    var host = server.address().address
    var port = server.address().port
    
    console.log('Server running at http://%s:%s', host, port);
});
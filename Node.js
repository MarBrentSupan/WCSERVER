//Mar Brent Supan
//2075 - WCSERVER
//02-02-22

var http = require('http'); //Import Node
var server = http.createServer(function(req, res) {
    
    var person = require('./Person.js');
    var person1 = new person('John', 'Smith');

    if (req.url == '/'){
        res.writeHead(200, {'Content.Type' : 'text/html'});
        res.write('<html><body><h1>Hello to my Node.js Application</h1></body></html>');
        res.write('<html><body><h3>Welcome '+ person1.fullName() +'. This is an activity about basic of Node.js </h3></body></html>');
        res.end();
    }
    else if (req.url == '/about'){
        res.writeHead(200, {'Content.Type' : 'text/html'});
        res.write('<html><body><h1>This is About Page</h1></body></html>');
        res.write('<html><body><h3>Hello '+ person1.fullName() +'. This is activity will teach on how to deal with a simple server and local modules in Node.js</h3></body></html>');
        res.end();
    }
    else if (req.url == '/contact'){
        res.writeHead(200, {'Content.Type' : 'text/html'});
        res.write('<html><body><h1>This is the Contact Page</h1></body></html>');
        res.write('<html><body><h3>'+ person1.fullName() +', if you want additional details about this activity go to this site: <a>https://www.tutorialsteacher.com/nodejs.nodejs-tutorials</a></h3></body></html>');
        res.end();
    }
    else if (req.url == '/gallery'){
        res.writeHead(200, {'Content.Type' : 'text/html'});
        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request');
});

server.listen(2000);
console.log('NodeJS localhost at port 2000 is running....')

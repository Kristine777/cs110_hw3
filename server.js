const http = require('http');


const httpServer = http.createServer(function(req, res) {

    if(req.url === '/HelloWorld') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    } 

    else if(req.url === '/picture') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('there are not any pictures:))))\n');
    } 

    else if(req.url === '/HelloWorld/wow') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Woooooooooooooooooow!!!!!!!!!!\n');
    }

    else if(req.url === '//HelloWorld/wow/foo') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Foooooooooooooooo!!!!\n');
    } 

    else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Not found");
    }
});


httpServer.listen(8080);
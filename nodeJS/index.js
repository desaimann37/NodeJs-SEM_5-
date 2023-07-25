let http = require('http');

const server = http.createServer(function(req , res){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    res.write("Hello World!");
    res.end();
});
server.listen(8090);



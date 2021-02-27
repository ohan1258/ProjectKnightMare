//This is some beginning shit
//hello da

//test comment
//test comment 2

var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('Hello World');
}).listen(8080);
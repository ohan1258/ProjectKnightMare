//This is some beginning shit
//hello da

//test comment
//test comment 2

var http=require('http');
var fs=require('fs');
var port=process.argv[2] || 8080;
http.createServer(function(req,res){
	fs.readFile('demo.html',function(err,data){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(data)
	return res.end();})
}).listen(parseInt(port));
var http = require("http");

http.createServer(function(request, response) { 
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.end("<marquee>Hello World!</marquee>");
}).listen(8080);
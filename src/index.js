var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    res.statusCode = 200;
   
    if(req.url == '/welcome'){
        res.setHeader('content-type', 'text/plain')
        res.end("Welcome to Dominos")
    }
    else if(req.url == '/contact'){
        res.setHeader('content-type', 'application/json')
        res.end("phone: '18602100000', email: 'guestcaredominos@jublfood.com' ")
    }
    else{
        res.statusCode = 404;
        res.end("Error 404")
    }
}
httpServer.listen(8081, ()=>{
    console.log("Listening on 8081")
})
module.exports = httpServer;
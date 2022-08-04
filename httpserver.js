const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type','text/html');

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>  this is the response to be displayed ovr the screen</h1>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About this server')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else {
        res.statusCode  = 404;
        res.end("the page was not found")
    }
} )

server.listen(
    port, 
    () => {
    console.log(`Server is listening on port ${port}`)
}
)

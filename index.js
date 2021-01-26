const http=require('http');

const hostname='localhost';
const port=3000;

const server=http.createServer((req,res)=>{

    console.log(req.headers);
    
    //console.log("Response headers"+res.headers);

    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('<html><head></head><body><h1>Hello world! Gandu</h1></body></html>');
});


server.listen(port,hostname,()=>{

    console.log(`Server running at http://${hostname}:${port}`);
});
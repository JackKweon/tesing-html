const http = require('home.html');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'test/plain');
    response.end('Hello World!!!!!!');
});

server.listen(port,(err)=>{
    if(err){
        return console.log('Something went wrong',err);
    }
    console.log('Server Listening on: ${port}');

});
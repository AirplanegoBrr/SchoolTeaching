//There are many ways to do this

//1 using http
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
server.listen(3000); //This will open our website http://localhost:3000/

//2 using express (you will need to download some extra modules to use express as it's not included in node)
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World\n');
});
app.listen(3001); //This will open our website http://localhost:3001/

/*
As you see express is alot esier to use than http
You can even add modules people create!
*/
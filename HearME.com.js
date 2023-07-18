const http = require('http')
const fs = require('fs')
const filecontent = fs.readFileSync('project2.html')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(filecontent)

})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
const http = require("http")

const hostname = '127.0.0.2'

const port = 3005

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text-html')
    res.end('<html><body><h1>Hello, World!</h1></body></html>\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)

})
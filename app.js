//API: https://rickandmortyapi.com/api/character

const fs = require('fs')
const http = require('http')
//const axios = require('axios')

http.createServer((req, res)=> {
    const url = req.url

    if(url==="/api"){
        const api = fs.readFileSync(__dirname + '/data.json')
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(api)
        return
    }
    if (url.substring(0,5) === "/api/" && url.length > 5){
        const dir = decodeURI(url.split('/')[2])
        const api = fs.readFileSync(__dirname + '/data.json')
        const char = JSON.parse(api).filter(char => char.id == dir)
        console.log(JSON.stringify(char))
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(char))
        return
    }
    const err = fs.readFileSync(__dirname + '/public/error.html')
    res.writeHead(404,{'Content-Type': 'text/html'})
    res.end(err)

}).listen(3001, '127.0.0.1')
//API: https://rickandmortyapi.com/api/character

const fs = require('fs')
const http = require('http')
//const axios = require('axios')

http.createServer((req, res)=> {
    const url = req.url

    switch(url){
        case "/api":
            const api = fs.readFileSync(__dirname + '/data.json')
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(api)
            return
        default:
            break //404 here!!!!
    }
    
    res.end()
}).listen(3001, '127.0.0.1')
import http from "http"
import fs from "fs"
import path from "path"

const port = 3000

http.createServer((req, res)=>{
    let filepath = path.join(process.cwd(), "web", "index.html")
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile(filepath, "utf8", (err, data)=>{
        if(err) throw err;
        else res.end(data)
    })

    filepath = path.join(process.cwd(), "web", "style.css")
    res.writeHead(200, {"Content-Type": "text/css"})
    fs.readFile(filepath, "utf8", (err, data)=>{
        if(err) throw err;
        else res.end(data)
    })

    filepath = path.join(process.cwd(), "web", "database.js")
    res.writeHead(200, {"Content-Type": "text/javascript"})
    fs.readFile(filepath, "utf8", (err, data)=>{
        if(err) throw err;
        else res.end(data)
    })

}).listen(port, "localhost", (err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("Server is running")
    }
})
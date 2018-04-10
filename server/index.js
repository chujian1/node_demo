/**
 * Created by ypj on 18-4-9.
 */
var http = require('http');

var server = http.createServer()

console.log(server.address())

server.on('listening',()=>{
    console.log("listening......")
})

server.on('request',(req,res)=>{
    console.log("客户端请求了")
    res.writeHead(200)
    res.write("hello")
    res.end()
})

server.listen(8080,'localhost')

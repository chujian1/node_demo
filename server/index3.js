/**
 * Created by ypj on 18-4-9.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var htmlDir = __dirname + '/html/';
var server = http.createServer();
server.on('request',(req,res)=>{

    var urlStr = url.parse(req.url);

    switch (urlStr.pathname){
        case '/' :
            sendData(htmlDir + 'index.html',req,res);
            break;
        case '/user' :
            sendData(htmlDir + 'user.html',req,res);
            break;
        case '/login' :
            sendData(htmlDir + 'login.html',req,res);
            break;
        case '/login/check' :

            if(req.method.toUpperCase()=='POST'){
                var str = '';
                req.on('data',(chunk)=>{
                    str+=chunk;
                })
                req.on('end',()=>{
                    console.log(querystring.parse(str))
                })
            }else{
                console.log(querystring.parse(urlStr.query))
            }
            break;
        default :
            sendData(htmlDir + 'err.html',req,res)
            break;
    }

});

function sendData(file,req,res) {
    fs.readFile(file,(err,data)=>{
        if(err){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end("<h1>页面出错了</h1>")
        }else{
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end(data);
        }

    })
}

server.listen(8080,'localhost');
/**
 * Created by ypj on 18-4-9.
 */
var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request',(req,res)=>{
    var urlStr = url.parse(req.url);

    switch (urlStr.pathname){
        case '/' :
            res.writeHead(200,{
               'content-type':'text/html;charset=utf-8'
            });
            res.end("<h1>这是首页</h1>");
            break;
        case '/user' :
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end("<h1>这是个人首页</h1>");
            break;
        default :
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end("<h1>出错了</h1>");
            break;
        }
});

server.listen(8080,'localhost');
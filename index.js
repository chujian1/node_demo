
var project = {
    'name' : 'yl',
    'fileData' : [
        {
            'type' : 'dir',
            'name' : 'css'
        },
        {
            'type' : 'dir',
            'name' : 'js'
        },
        {
            'type' : 'dir',
            'name' : 'images'
        }
        ,
        {
            'type' : 'file',
            'name' : 'index.html',
            'content' : '<html>\n\t<head>\n\t<title>hello</title>\n\t</head>\n\t<body>\n\t<h1>Hello World</h1>\n\t</body>\n</html>'
        }
        ]
};

var fs = require('fs');

if(project.name){
    fs.mkdir(project.name,(err)=>{
        if(err)
            console.log("创建"+project.name+"失败")
        else
            console.log("创建"+project.name+"成功")
    })
    var fileData = project.fileData;

    if(fileData && fileData.forEach){
        fileData.forEach((f)=>{
            f.path = project.name + '/' +f.name;
            f.content = f.content || '';
            switch (f.type){
                case 'dir' : fs.mkdir(f.path,(err)=>{
                    if(err)
                        console.log("创建"+f.name+"失败")
                    else
                        console.log("创建"+f.name+"成功")
                });break;
                case 'file' : fs.writeFile(f.path,f.content,(err)=>{
                    if(err)
                        console.log("创建"+f.name+"失败")
                    else
                        console.log("创建"+f.name+"成功")
                })
                default:break;
            }
        })
    }
}

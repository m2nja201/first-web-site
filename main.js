// require
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');

var app = http.createServer(function(request, response){
    var _url = request.url; // _url = /?id=~
    var queryData = url.parse(_url, true).query; // {id : HTML}
    var title = queryData.id; // HTML
    var filteredID = path.parse(title).base; // 경로를 제외한 이름만을 나오게 해준다
    var pathname = url.parse(_url, true).pathname; // 3000번 뒤에 나오는 /부터 쭉
    console.log(pathname);
});
app.listen(3000);
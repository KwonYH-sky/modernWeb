// 모듈 추출
var http = require('http');
var fs = require('fs');
var less = require('less');

// 서버 생성 및 실행
http.createServer(function (request, response) {
    // 파일을 읽음
    fs.readFile('LessStyleSheet2.less', 'utf8', function (error, data) {
        // 스타일시트 변환
        less.render(data, function (error, style) {
            //응답
            response.writeHead(200, { "Content-Type": "text/css" });
            response.end(style);
        });
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273')
});

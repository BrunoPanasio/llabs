var http = require('http');
var start = new Date();
http.get({host: 'app1.llabs.com', port: 3000}, function(res) {
    console.log('Tempo de resposta:', new Date() - start, 'ms');
    console.log('Status da resposta:', res.statusCode);
});

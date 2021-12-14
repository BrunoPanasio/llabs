var http = require('http');
var start = new Date();
http.get({host: 'app1.llabs.com', port: 80}, function(res) {
    console.log('Tempo de resposta:', new Date() - start, 'ms');
    console.log('Status da repsosta:',res.statusCode);
});
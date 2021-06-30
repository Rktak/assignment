
var express = require('express');
var app = express();
var http = require('http');



app.get('/', function(req,res){
    var api_response = '';
    var options ={
        host: '',
        port: 80,
        path: '/api/emma',
        method: 'GET'
    }
    callback = function(response){
        response.on("data", function(chunk){
            api_response+=chunk;
        });
        response.on("end", function(){
            console.log("api response is:"+api_response);
        });

    }

    var req = http.request(options, callback);
    req.end();
    res.send('call completed successfully');
});


//first will create server
app.listen(7007,function(req,res){
    console.log('server is listening at port no. 7007');
});

'use strict'
var app  = require('./app');
var port = process.env.PORT || 5656;


    app.listen(5656,function(){
        console.log(`api rest del anfitrion funcionando en http://localhost:${port}`);
    });
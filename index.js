'use strict'

const Transom = require('@transomjs/transom-core');

const helloPlugin = require('./helloPlugin');

const transom = new Transom();

transom.configure(helloPlugin);

transom.initialize().then(function(server){
    server.listen(7070, function(){
        console.log("Listening on http://localhost:7070");
    });
})



var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();

//setting up template engine

app.set('view engine','ejs');


//static file

app.use(express.static('./public'));

//fire controllers

todoController(app);


//listen port

app.listen(3002);
console.log("Listening port:3002");

var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index');
    });

app.get('/contact.html', function(req, res) {
	res.render('contact')
	});

app.get('/todolist.html', function(req, res) {
	res.render('todolist')
	});

app.get('/login.html', function(req, res) {
	res.render('login')
	});

app.get('/register.html', function(req, res) {
	res.render('register')
	});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});
app.listen(8080);

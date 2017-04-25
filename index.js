var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('<!DOCTYPE html>'+
						'<html>'+
						'    <head>'+
						'        <meta charset="utf-8" />'+
						'        <title>Coucou</title>'+
						'    </head>'+ 
						'    <body>'+
						'     	<a href="contact.html">Lien vers Contact</a>'+
						'     	<a href="todolist.html">Lien vers Todolist</a>'+
						'     	<a href="login.html">Lien vers login</a>'+
						'     	<a href="register.html">Lien vers Enregistrement</a>'+
						'     	<p> TAMERE LA PUTE </p>'+
						'    </body>'+
						'</html>'
					);
    res.end();
    });

app.get('/contact.html', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('<!DOCTYPE html>'+
		'<html>'+
		'    <head>'+
		'        <meta charset="utf-8" />'+
		'        <title>Bienvenue sur la page de Contact</title>'+
		'    </head>'+ 
		'    <body>'+
		'     	<p> Bienvenue sur la page de contact </p>'+
		'     	<a href="/">Retour</a>'+
		'    </body>'+
		'</html>');
	res.end();
	});

app.get('/todolist.html', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('<!DOCTYPE html>'+
		'<html>'+
		'    <head>'+
		'        <meta charset="utf-8" />'+
		'        <title>Bienvenue sur la page de Contact</title>'+
		'    </head>'+ 
		'    <body>'+
		'     	<p> Bienvenue sur la page de la liste </p>'+
		'     	<a href="/">Retour</a>'+
		'    </body>'+
		'</html>');
	res.end();
	});

app.get('/login.html', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('<!DOCTYPE html>'+
		'<html>'+
		'    <head>'+
		'        <meta charset="utf-8" />'+
		'        <title>Bienvenue sur la page de Contact</title>'+
		'    </head>'+ 
		'    <body>'+
		'     	<p> Bienvenue sur la page de login </p>'+
		'     	<a href="/">Retour</a>'+
		'    </body>'+
		'</html>');
	res.end();
	});

app.get('/register.html', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('<!DOCTYPE html>'+
		'<html>'+
		'    <head>'+
		'        <meta charset="utf-8" />'+
		'        <title>Bienvenue sur la page de Contact</title>'+
		'    </head>'+ 
		'    <body>'+
		'     	<p> Bienvenue sur la page denregistrement </p>'+
		'     	<a href="/">Retour</a>'+
		'    </body>'+
		'</html>');
	res.end();
	});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});
app.listen(8080);

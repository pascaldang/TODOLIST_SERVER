var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});
    switch (page) {
    	case '/' :
        	res.write('<!DOCTYPE html>'+
						'<html>'+
						'    <head>'+
						'        <meta charset="utf-8" />'+
						'        <title>Bienvenue en cours de NodeJS</title>'+
						'    </head>'+ 
						'    <body>'+
						'     	<a href="contact.html">Lien vers Contact</a>'+
						'     	<a href="todolist.html">Lien vers Todolist</a>'+
						'     	<a href="login.html">Lien vers login</a>'+
						'     	<a href="register.html">Lien vers Enregistrement</a>'+
						'    </body>'+
						'</html>'
					);
        	break;
        case '/contact.html' :
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
        	break;
        case '/todolist.html' :
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
        	break;
        case '/login.html' :
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
        	break;
        case '/register.html' :
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
        	break;        	
        default :
        	res.writeHead(404, 'Erreur 404');
        }
    res.end();
});
server.listen(8080);
var express = require('express');
var app = express(); 
var ig = require('instagram-node').instagram(); 
 
// CONFIGURE THE APP 
// ========================

// configure instagram app with client_id, client_secret, and access_token 
ig.use({
	// get access token here: http://instagram.pixelunion.net

	access_token: '1937780430.1677ed0.5b2133020cf64e979778e2ab7c90d98b'
});	



app.use(express.static(__dirname + '../public')); 

app.set('view engine', 'ejs'); 

// HOMEPAGE ROUTE
// ========================

app.get('/', function(req, res)
{
	// use the instagram package to get popular media
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) { res.render('pages/index', {grams: medias});
	});
	// res.render('pages/index', {data: 'I am like so hot ! I know right...'}); 
}); 	

app.listen(8080) ; 
console.log('App Started at localhost:8080!');


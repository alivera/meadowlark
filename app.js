//setup modules and express
var express = require('express');
var fortune = require('./lib/fortune.js');
var app = express();

//listen on port3000
app.listen(process.env.PORT || 3000);

//static files
app.use(express.static(__dirname + '/public'));

//setup handlebars view-engine
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//routes
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about', { fortune: fortune.getFortune() });
});

//custom 404 page
app.use(function(req,res,next) {
	res.status(404);
	res.render('404');
});

app.use(function(err,req,res,next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});





var express = require('express');


var fortunes = [
	"Lucky!!!",
	"Un Lucky!!!",
	"More or less...",
	"Bad luck...",
];


var app = express();
app.use(express.static(__dirname + '/public'));


var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.render('home');
});
app.get('/about', function(req, res) {
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomFortune });
});

// 커스텀 404 페이지
app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

// 커스텀 500 페이지
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

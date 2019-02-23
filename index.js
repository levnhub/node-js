var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

// Подключение статических файлов, "перелинковка"
app.use('/public', express.static('public'));

// app.get('/', function(req,res) {
//     // res.send('This is home');
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/about', function(req,res) {
//     // res.send('This is about');
//     res.sendFile(__dirname + '/about.html');
// });

// app.get('/news', function(req,res) {
//     res.send('This is news');
// });

// Переменные в строку запроса
// app.get('/news/:id/:name', function(req,res) {
//     res.send('ID is —' + req.params.id + req.params.name);
// });

// Работает через шаблонизатор
app.get('/', function(req,res) {
	res.render('index');
});

app.get('/about', function(req,res) {
	res.render('about');
});

app.get('/news/:id', function(req,res) {
	var obj = {
		title: 'Новость',
		id: 4,
		paragraphs: ['Параграф', 'Обычный текст', 'Числа: 2, 4, 6', 99]
	}
	console.log(req.query);
	res.render('news', { newsId: req.params.id, newsParam: 234, obj: obj });
});

// Принимаем данные из формы
app.post('/about', urlencodedParser, function(req,res) {
	if (!req.body) return res.sendStatus(400);
	// console.log(req.body);
	res.render('about-success', {data: req.body});
});




app.listen(3000);
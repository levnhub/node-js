// Подключение модуля
var things = require('./things.js');

console.log(things.some_value);

console.log(things.array_counter([1, 7, 99, 8, 45, 8]));

console.log(things.multiply(5, 8));

// Обработчик событий
var events = require('events');
var myEmit = new events.EventEmitter();

myEmit.on('some_event', function (text) {
	console.log(text);
});

myEmit.emit('some_event', 'Обработчик событий сработал!');

// Наследование
var util = require('util');

var Cars = function (model) {
	this.model = model;
}

// Constructor test
// Cars.model = 123;
// console.log( Cars.model );

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo];

cars.forEach(function (car) {
	car.on('speed', function (text) {
		console.log(car.model + " speed is – " + text);
	});
});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '180 km');


// Работа с файлами
var fs = require('fs');

// Синхронная запись файлов
// var file_readed = fs.readFileSync('text.txt', 'utf-8');
// console.log(file_readed);
// var message = 'Привет мир!\n' + file_readed; 
// fs.writeFileSync('some_new_file.txt', message);

// Асинхронная запись файлов
fs.readFile('text.txt', 'utf-8', function (err, data) {
	console.log(data);
});

fs.writeFile('some.txt', 'Hi, it is me', function (err, data) {});

console.log('test');

// Удаление файлов
// fs.unlink('file.txt', function() {});
// fs.mkdir('new-one', function() {
// 	fs.writeFile('./new-one/some_new.txt', 'Привет мир!', function () {
// 		console.log('Все сработало!');
// 	})
// });
// fs.unlink('./new_one/some_new.txt', function() {});
// fs.rmdir('new-one', function() {});


// Создание сервера
// var http = require('http');

// var server = http.createServer(function (req, res) {
// 	console.log('URL страницы: ' + req.url);
// 	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
// 	res.end('Привет Мир!');
// })

// server.listen(3000, '127.0.0.1');
// console.log('Мы отслеживаем порт 3000');


// Потоки
// var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
// var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

	// Через функцию
	// myReadShort.on('data', function (chunk) {
	// 		console.log('Новые данные получены:\n\n\n\n\n\n\n\n' + chunk + '\n\n\n');
	// 		myWriteShort.write(chunk);
	// })

	// Через pipe
	// myReadShort.pipe(myWriteShort);


	// Создание сервера (вывод потоков и HTML)
	// var http = require('http');

	// var server = http.createServer(function (req, res) {
	// 	console.log('URL страницы: ' + req.url);
	// 	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	// 	var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
	// 	myReadShort.pipe(res);
	// })

	// server.listen(3000, '127.0.0.1');
	// console.log('Мы отслеживаем порт 3000');


	// Создание сервера (вывод потоков и JSON)
	// var http = require('http');

	// var server = http.createServer(function (req, res) {
	// 	console.log('URL страницы: ' + req.url);
	// 	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	// 	var obj = {
	// 		model: 'Audi',
	// 		speed: '234.5',
	// 		wheels: 4
	// 	}
	// 	res.end(JSON.stringify(obj));
	// })

	// server.listen(3000, '127.0.0.1');
	// console.log('Мы отслеживаем порт 3000');

	// Маршрутизация NodeJS
	var http = require('http');

	var server = http.createServer(function (req, res) {
		console.log('URL страницы: ' + req.url);
		if (req.url === '/index' || req.url === '/') {
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			fs.createReadStream(__dirname + '/index.html').pipe(res);
		} else if (req.url === '/about') {
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			fs.createReadStream(__dirname + '/about.html').pipe(res);
		} else {
			res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
			fs.createReadStream(__dirname + '/404.html').pipe(res);
		}
	})

	server.listen(3000, '127.0.0.1');
	console.log('Мы отслеживаем порт 3000');















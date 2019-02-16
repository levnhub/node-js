// Способ экспотра №2
// module.exports.array_counter = function (array) {
// 	return "В массиве находиться " + array.length + " элемента!";
// }

// module.exports.multiply = function (x, y) {
// 	return `${x} умножить на ${y} равно ${x * y}`;
// }

// module.exports.some_value = 451;

var array_counter = function (array) {
	return "В массиве находиться " + array.length + " элемента!";
}

var multiply = function (x, y) {
	return `${x} умножить на ${y} равно ${x * y}`;
}

var some_value = 451;

// Способ экспорта №1
// module.exports.array_counter = array_counter;

// Способ экспорта №3
module.exports = {
	array_counter: array_counter,
	multiply: multiply,
	some_value: some_value
}

//Business (or back-end) logic;

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
// Everything below this line is user interface (of front-end) logic:
//start add
$(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();

		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);

		$("#outputAdd").text(result);
	});
	//end add
	//start subtract
	$("form#subtract").submit(function(event) {
		event.preventDefault();

		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);

		$("#outputSubtract").text(result);
	});
	//end subtract
});

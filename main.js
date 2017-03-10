//Add in external javacript file
// Set the variables
$(document).ready(function () {

	$("#button").on("click", function (e) {
		e.preventDefault();
		var x = parseFloat($("#x").val());
		var y = parseFloat($("#y").val());

		var add = addNum(x, y);
		var multiply = multiplyNum(x, y);
		var divide = divideNum(x, y);
		var subtract = subtractNum(x, y);

		$("#add").val(add);
		$("#multiply").val(multiply);
		$("#divide").val(divide);
		$("#subtract").val(subtract);

		$("#bear").addClass("active");


	});


});


function addNum(x, y) {
	return x + y;
};

function multiplyNum(x, y) {
	return x * y;
};

function divideNum(x, y) {
	return x / y;
};

function subtractNum(x, y) {
	return x - y;
};

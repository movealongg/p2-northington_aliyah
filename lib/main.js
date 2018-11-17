'use strict';

$(document).ready(function () {
	$(function () {
		$("#exampleModal").modal();
	});
});

var colors = document.querySelectorAll('.colorContainer > p');

function wrapper() {
	var _this = this;

	var changeColor = function changeColor() {
		_this.parentNode.classList.toggle('change');
	};

	var chooseColor = function chooseColor() {
		var thisColor = _this.childNodes[0].nodeValue;
		var thisColorLength = thisColor.length;

		for (var i = 0; i < thisColorLength * 2; i++) {
			setTimeout(function () {
				changeColor();
			}, i * 500);
		};
	};

	chooseColor();
};

for (var i = 0; i < colors.length; i++) {
	colors[i].addEventListener('click', wrapper);
};
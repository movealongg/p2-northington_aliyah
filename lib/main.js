'use strict';

$(document).ready(function () {
	$(function () {
		$("#exampleModal").modal();
	});
});

var colorBg = document.querySelector('.color');
var colorBg2 = document.querySelector('.color2');
var colorBg3 = document.querySelector('.color3');
var colors = document.querySelectorAll('.colorContainer > p');
var colors2 = document.querySelectorAll('.colorContainer2 > p');
var colors3 = document.querySelectorAll('.colorContainer3 > p');

function wrapper() {
	var _this = this;

	var changeColor = function changeColor() {
		colorBg.classList.toggle('change');
	};

	var chooseColor = function chooseColor() {
		var thisColor = _this.childNodes[0].nodeValue;
		var thisColorLength = thisColor.length;

		for (var i = 0; i < thisColorLength * 2; i++) {
			setTimeout(function () {
				changeColor();
			}, i * 600);
		};
		setTimeout(function () {
			colorBg.classList.add('hide');
			colorBg2.classList.remove('hide');
			colorBg2.classList.add('show');
		}, thisColorLength * 1000);
	};

	chooseColor();
};

function wrapper2() {
	var _this2 = this;

	var changeColor2 = function changeColor2() {
		colorBg2.classList.toggle('change');
	};

	var chooseColor2 = function chooseColor2() {
		var thisNumber = _this2.childNodes[0].nodeValue;
		var thisNumberValue = Number(thisNumber);

		for (var i = 0; i < thisNumberValue * 2; i++) {
			setTimeout(function () {
				changeColor2();
			}, i * 600);
		};
		setTimeout(function () {
			colorBg2.classList.add('hide');
			colorBg2.classList.remove('show');
			colorBg3.classList.remove('hide');
			colorBg3.classList.add('show');
		}, thisNumberValue * 1000);
	};

	chooseColor2();
};

function wrapper3() {
	var _this3 = this;

	var changeColor3 = function changeColor3() {
		colorBg3.classList.toggle('change');
	};

	var chooseColor3 = function chooseColor3() {
		var thisNumber = _this3.childNodes[0].nodeValue;
		var thisNumberValue = Number(thisNumber);

		for (var i = 0; i < thisNumberValue * 2; i++) {
			setTimeout(function () {
				changeColor3();
			}, i * 600);
		};
		setTimeout(function () {
			colorBg3.classList.add('hide');
			colorBg3.classList.remove('show');
		}, thisNumberValue * 1000);
	};

	chooseColor3();
};

for (var i = 0; i < colors.length; i++) {
	colors[i].addEventListener('click', wrapper);
};

for (var _i = 0; _i < colors.length; _i++) {
	colors2[_i].addEventListener('click', wrapper2);
};

for (var _i2 = 0; _i2 < colors.length; _i2++) {
	colors3[_i2].addEventListener('click', wrapper3);
};
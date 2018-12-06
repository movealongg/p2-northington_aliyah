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
		}
		setTimeout(function () {
			colorBg.classList.add('hide');
			colorBg2.classList.remove('hide');
			colorBg2.classList.add('show');
			console.log('hi');
		}, thisColorLength * 1000);
	};

	chooseColor();
};

for (var i = 0; i < colors.length; i++) {
	colors[i].addEventListener('click', wrapper);
};
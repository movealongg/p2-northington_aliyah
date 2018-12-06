$(document).ready(function() {
	$(function() {
		$("#exampleModal").modal();
	});
});

const colorBg = document.querySelector('.color');
const colorBg2 = document.querySelector('.color2');
const colorBg3 = document.querySelector('.color3');
const colors = document.querySelectorAll('.colorContainer > p');
const colors2 = document.querySelectorAll('.colorContainer > p');
const colors3 = document.querySelectorAll('.colorContainer > p');

function wrapper(){
	const changeColor = () => {
		colorBg.classList.toggle('change');
		};
	
	const chooseColor = () => {
		let thisColor = this.childNodes[0].nodeValue;
		let thisColorLength = thisColor.length;
		
		for (let i = 0; i < thisColorLength * 2; i++){
			setTimeout (function(){
				changeColor();
			}, i * 600);
		};
	};
	
	chooseColor();
};

for(let i = 0; i < colors.length; i++){
	colors[i].addEventListener('click', wrapper);
};
$(document).ready(function() {
	$(function() {
		$("#exampleModal").modal();
	});
});

const colorBg = document.querySelector('.color');
const colorBg2 = document.querySelector('.color2');
const colorBg3 = document.querySelector('.color3');
const colors = document.querySelectorAll('.colorContainer > p');
const colors2 = document.querySelectorAll('.colorContainer2 > p');
const colors3 = document.querySelectorAll('.colorContainer3 > p');
const fortunes = [
	'Sometimes the most productive thing you can do is relax.',
	'Self care is the main essential to manifesting anything in your life.',
	'Live less out of habit and more out of intent.',
	'If it doesn\'t make you feel fabulous: don\'t buy it, don\'t do it, don\'t keep it.',
	'The best things in life just happen.',
	'Strive for progress, not perfection.', 'Anything is possible if you have enough nerve.',
	'Beauty begins the momemnt you decide to be yourself.',
	'Stay close to anything that makes you glad you are alive.',
	'Never let the fear of striking out keep you from playing the game.'];

function randomFortune(){
	fortunes.sort(function(a, b){return 0.5 - Math.random()});
	console.log(fortunes);
};

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
			setTimeout (function(){
				colorBg.classList.add('hide');
				colorBg2.classList.remove('hide');
				colorBg2.classList.add('show');
			}, thisColorLength * 1000);
	};
	
	chooseColor();
};

function wrapper2(){
	const changeColor2 = () => {
		colorBg2.classList.toggle('change');
		};
	
	const chooseColor2 = () => {
		let thisNumber = this.childNodes[0].nodeValue;
		let thisNumberValue = Number(thisNumber);
		
		for (let i = 0; i < thisNumberValue * 2; i++){
			setTimeout (function(){
				changeColor2();
			}, i * 600);
		};
			setTimeout (function(){
				colorBg2.classList.add('hide');
				colorBg2.classList.remove('show');
				colorBg3.classList.remove('hide');
				colorBg3.classList.add('show');
			}, thisNumberValue * 1000);
	};
	
	chooseColor2();
};

function wrapper3(){
	const changeColor3 = () => {
		colorBg3.classList.toggle('change');
		};
	
	const chooseColor3 = () => {
		let thisNumber = this.childNodes[0].nodeValue;
		let thisNumberValue = Number(thisNumber);
		
		for (let i = 0; i < thisNumberValue * 2; i++){
			setTimeout (function(){
				changeColor3();
			}, i * 600);
		};
			setTimeout (function(){
				colorBg3.classList.add('hide');
				colorBg3.classList.remove('show');
			}, thisNumberValue * 1000);
	};
	
	chooseColor3();
	randomFortune();
};

for(let i = 0; i < colors.length; i++){
	colors[i].addEventListener('click', wrapper);
};

for(let i = 0; i < colors.length; i++){
	colors2[i].addEventListener('click', wrapper2);
};

for(let i = 0; i < colors.length; i++){
	colors3[i].addEventListener('click', wrapper3);
};
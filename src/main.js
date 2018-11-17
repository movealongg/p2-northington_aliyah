$(document).ready(function() {
	$(function() {
		$("#exampleModal").modal();
	});
});

const colors = document.querySelectorAll('.colorContainer > p');

function wrapper(){
	const changeColor = () => {
		this.parentNode.classList.toggle('change');
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
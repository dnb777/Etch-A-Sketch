"use strict"

const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const input = getGridSize();

function getGridSize() {
	let input = 0;
	while(true) {
		input = prompt("How many squares per side do you want?", 0);
		if (input <= 100) break;
		alert("To large");
	}
	return input;
};

function addSquares(n) {
	for (let i = 0; i < (input * input); i++){
		const div = document.createElement("div");
		div.classList.add('square');
		container.appendChild(div);
	};
};

addSquares();

const divs = container.querySelectorAll('.square');
const paintSquare = divs.forEach((div) => {
	div.addEventListener('mousemove', () => {
		div.classList.add('black');
	});
});

const resetGrid = button.addEventListener('click', () => {
	divs.forEach((div) => {
		div.classList.remove('black');
	});
});





"use strict"

const container = document.querySelector("#container");
const button = document.querySelector("#btn");


function addSquares(n) {
	for (let i = 0; i < (n * n); i++){
		const div = document.createElement("div");
		div.classList.add('square');
		container.appendChild(div);
	};
};


addSquares(32)

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

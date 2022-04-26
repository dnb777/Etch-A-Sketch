"use strict"

const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const root = document.documentElement;


function getGridSize() {
	let userInput = 0;
	while(true) {
		userInput = prompt("How many squares per side do you want?", 0);
		if (userInput <= 100) break;
		alert("To large");
	}
	userInput = Number(userInput);
	root.style.setProperty('--col', userInput);
	root.style.setProperty('--row', userInput);
	return userInput;
};

function addSquares(n) {
	for (let i = 0; i < (n * n); i++){
		const div = document.createElement("div");
		div.classList.add('square');
		container.appendChild(div);
	};
};

const resetGrid = button.addEventListener('click', () => {
	const input = getGridSize();
	const newGrid = addSquares(input);
	
	const divs = container.querySelectorAll('.square');
	divs.forEach((div) => {
		div.classList.remove('black');
	});

	const paintSquare = divs.forEach((div) => {
		div.addEventListener('mousemove', () => {
			div.classList.add('black');
		});
	});
});





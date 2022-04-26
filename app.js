"use strict"

const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const root = document.documentElement;


function addSquares(n) {
	for (let i = 0; i < (n * n); i++){
		const div = document.createElement("div");
		div.classList.add('square');
		container.appendChild(div);
	};
};

//Set the inicial grid to 16x16
function defaultGrid() {
	addSquares(16);
	const divs = container.querySelectorAll('.square');
	paintSquares(divs);
}
defaultGrid();

function paintSquares(divs) {
	divs.forEach((div) => {
		div.addEventListener('mousemove', () => {
			div.classList.add('black');
		});
	});
};

//Ask user for input to set the scale of the grid, input has to be <= 100
function getGridSize() {
	let userInput = 0;
	while(true) {
		userInput = prompt("How many squares per side do you want?", 0);
		if (userInput <= 100) break;
		alert("To large");
	}
	userInput = Number(userInput);
	root.style.setProperty('--col', userInput);//change the value of grid-template-column
	root.style.setProperty('--row', userInput);//change the value of grid-template-row
	return userInput;
};

const resetGrid = button.addEventListener('click', () => {
	const input = getGridSize();
	const newGrid = addSquares(input);
	
	//reset the background-color of the div's in the grid
	const divs = container.querySelectorAll('.square');
	divs.forEach((div) => {
		div.classList.remove('black');
	});
	paintSquares(divs);
});





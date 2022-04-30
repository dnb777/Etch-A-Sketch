"use strict";

const blackBtn = document.querySelector('#black');
const rainbowBtn = document.querySelector('#rainbow');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');

const gridContainer = document.querySelector('#grid');

const slider = document.querySelector('#myRange');
const sizeValue = document.querySelector('#sizeValue');
let value = 16;

sizeValue.textContent = `${slider.value}x${slider.value}`;

let color = 'black';
// change color when onclick event(inline js) is fired
function changeColor(choice) {
	color = choice;
};

function draw() {
	const divs = document.querySelectorAll('.square');
	divs.forEach(div => {
		div.addEventListener('mousemove', () => {
			if(color === 'black') {
				div.style.backgroundColor = '#000';
			}else if (color === 'white') {
				div.style.backgroundColor = '#FFF';
			}else if (color === 'rainbow') {
				div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
			}
		});
	});
};

const clear = () => {
	const divs = document.querySelectorAll('.square');
	divs.forEach(div => {
		div.style.backgroundColor = '';
	});
};


 // create a defautl 16x16 grid
const defaultGrid = () => {
	newGrid(16);
	draw();
};
defaultGrid();


// Generates a grid based on the value that is passed
function newGrid(value) {
	gridContainer.style.cssText = 
	`grid-template-rows: repeat(${value}, 1fr); 
	 grid-template-columns: repeat(${value}, 1fr)`;

	for (let i = 0; i < (value * value); i++) {
		const div = document.createElement('div');
		div.classList.add('square');
		gridContainer.appendChild(div);
	};
	color = 'black';
	draw();
};


// When moving the slider, passes the corresponging value to the "value" variable and calls the newGrid function with that value
slider.oninput = function() {
  sizeValue.textContent = `${this.value}x${this.value}`;
  value = this.value;
  clear();
  newGrid(value);
};



// blackBtn.addEventListener('click', draw);
// eraserBtn.addEventListener('click', draw);
clearBtn.addEventListener('click', clear);
// rainbowBtn.addEventListener('click', draw);



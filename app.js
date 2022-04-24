"use strict"

const container = document.querySelector("#container");





function addSquares(n) {
	for (let i = 0; i < (n * n); i++){
		const div = document.createElement("div");
		div.classList.add("squares");
		container.appendChild(div);
	};
};

addSquares(16)
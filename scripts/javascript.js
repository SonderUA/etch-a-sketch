const button = document.querySelector(".create");
let container = document.querySelector(".container");

function randomColor() {
	return Math.floor(Math.random() * 257); // Generate a number between 0 - 256
}

button.addEventListener("click", () => {
	let size;
	do {
		size = +prompt("Enter the number of squares per side: ");
		console.log(size <= 100 && size > 0 && Number.isInteger(size));
	} while (!(size <= 100 && size > 0 && Number.isInteger(size)));

    container.innerHTML = "";
	for (let i = 0; i < size * size; i++) {
		let opacity = 0;
		let backgroundColor;
		const div = document.createElement("div");
		div.setAttribute(
			"style",
			`width: ${100 / size}%; 
            aspect-ratio: 1 / 1;`
		);
		container.appendChild(div);
		div.addEventListener("mouseover", () => {
			if (!backgroundColor) {
				backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
				div.style.backgroundColor = backgroundColor;
			}
			if (opacity < 10) {
				div.style.opacity = `${++opacity / 10}`;
			}
		});
	}
});

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
});

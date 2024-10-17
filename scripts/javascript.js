let container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
	const div = document.createElement("div");
	div.setAttribute("class", "pixel");
	container.appendChild(div);
	div.addEventListener("mouseover", () => {
		div.setAttribute("class", "dark pixel");
	});
}

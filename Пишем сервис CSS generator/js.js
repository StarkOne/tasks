document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
	//прямоугольник
	var div = document.getElementById("test");
	// получаю textarea
	var our = document.getElementById("out");

	div.style.borderRadius = this.value + "px";

	out.innerHTML = "-webkit-border-radius: " + this.value + "px;\n" ;
	out.innerHTML += "border-radius: " + this.value + "px;";
}
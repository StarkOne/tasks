var p = document.getElementsByTagName('p');
console.log(p);

for (var i = 0; i<p.length; i++){
	console.log(i);
	p[i].onclick = f1;
};
function f1() {
	console.log("1");
}
document.onmousemove = function() {
	document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeEnd", "<img src='https://cdn2.iconfinder.com/data/icons/cat-power/128/cat_walk.png' id='cat'>");

	var cat = document.getElementById('cat');
	cat.style.position = "fixed";
	
	document.onmousemove = function(e) {
		cat.style.left = event.clientX + 20 + "px";
		cat.style.top = event.clientY + 20 + "px";
	}
}

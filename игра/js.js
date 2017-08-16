window.onload = init;

// игра 1
function init(){
	var images = document.getElementsByTagName("img");

		for (var i = 0; i < images.length; i++) {
			images[i].onmouseover = showAnswer;
		}
}

function showAnswer(eventObj) {
		var image = eventObj.target;
		var name = image.id;
		name = name + ".jpg";
		image.src = name;

		setTimeout(reblur, 2000, image);
}

function reblur(image) {
		var name = image.id;
		name = name + "blur.jpg";
		image.src = name;
}


// игра 2
// function init1(){
// 	var image = document.getElementById("map");
// 	image.onmousemove = showCord;

// }

// function showCord(e) {
// 	var cord = document.getElementById("coords");
// 	var x = e.clientX;
// 	var y = e.clientY;

// 	cord.innerHTML = "Map " + x + ", " + y;
// }

// function onmousemoveN(eventObj){
// 	console.log(eventObj.clientX + " " + eventObj.clientY);
// }
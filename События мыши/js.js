var block = document.getElementById('one');

//клик мыши

// block.onclick = function() {
// 	this.style.background = "green";
// }

// block.onclick = function(e) {
// 	if(e.button == 0){
// 		console.log("Вы нажали левую кнопку");
// 	} else {
// 		console.log("Вы нажали правую кнопку");
// 	}
// }
//двойнй клик

// block.ondblclick = function() {
// 	this.style.background = "red";
// }

// клик правой кнопкой мыши

// block.oncontextmenu = function() {
// 	this.style.background = "black";
// 	//return false; //запрет на нажатие правой кнопкой мыши
// }

// наведение мыши

// block.onmouseenter = function() {
// 	this.style.background = "gold";
// }

// // ан ховер

// block.onmouseleave = function() {
// 	this.style.background = "orange";
// }

// движение мыши внутри блока
// var a = 0;
// block.onmousemove = function() {
// 	a++;
// 	this.style.width = 100 + a + "px";
// }

// нажатие кнопки мыши и держим
// block.onmousedown = function(e) {
// 	this.style.background = "cyan";
// 	console.log("button: "+e.button);
// 	console.log("which: "+e.which);
// }

// нажатие кнопки мыши и отпускаем
block.onmouseup = function() {
	this.style.background = "pink";
}
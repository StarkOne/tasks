// function sum(a){
// 	var a1 = a;
// 	return function(b){
// 		return a+b;
// 	}
// }

// console.log(sum(5)(4));


// function makeBuffer() {
//   var text = '';

//   return function(piece) {
//     if (arguments.length == 0) { // вызов без аргументов
//       return text;
//     }
//     text += piece;
//   };
//   this.clear = function(){
//   	text = '';
//   }
// };

// var buffer = makeBuffer();

// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// buffer();
// console.log(buffer('Замыкания'));

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Маша, Вася, Петя

// function byField(value) {
// 	return function(a,b){
// 		return a[value] > b[value] ? 1 : -1;
// 	}
// }

/* .. ваш код для filter, inBetween, inArray */

// function filter(arr, func){
// 	var positiveArr = arr.filter(func);
// 	return positiveArr;
// }

// function inBetween(x,b){
// 	return function(a){
// 		if(a >= x && a <= b){
// 			return a;
// 		};
// 	}
// };
// function inArray(a){

// }
// var arr = [1, 2, 3, 4, 5, 6, 7];

// alert(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6

// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2



function makeArmy() {

  var shooters = [];
  var a = 0;
  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      a = i;
      alert( a ); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

alert(army[0]()); // стрелок выводит 10, а должен 0
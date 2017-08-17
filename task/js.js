
// //Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["Javascript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(firstName, prop){
// // Only change code below this line
//   for (var i = 0; i < contacts.length; i++){
//     var obj = contacts[i];
//         if(firstName == obj.firstName){
//           if(obj.hasOwnProperty(prop)){
//             return obj[prop];
//           } else {
//             return "No such property";
//           }
//       }
//     }
//   }
// // Only change code above this line
// }

// // Change these values to test your function
// lookUpProfile("Bob", "number");
// // lookUpProfile("Harry", "lastName");
// // lookUpProfile("Kristian", "lastName");
// // lookUpProfile("Sherlock", "likes");
// //lookUpProfile("Kristian", "lastName");



// function findLongestWord(str) {
//   var arr = str.split(" ");
//   var num = 0;
//   for(var i = 0; i < arr.length; i++){
//     if(num < i.length){
//       num = i.length;
//     }
//   }
//   return num;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");


// function fac(a){
//   var num = 1;
//   for(var i = 1; i <= a; i++){
//     if(a <= 1){
//       return a;
//     } else {
//       num *= i;
//     }
//   }
//   return num;
// }

// alert(fac(5));

// function isPrime(num){
// 	  if(num > 1){
//     for(let i = 2; i < num; i++){
//       if(num % i === 0){
//         return false;
//       };
//     }
//     return true;
//   }
//   return false;
// }

// isPrime(1); // false
// isPrime(7); // true
// isPrime(10)

// var m = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5];
// for (var i = 0; i < 9; i++) {
//     var m_min = m[i];
//     for (var j = i + 1; j < 10; j++) {
//         if (m[j] < m_min) {
//             var mm = m[i];
//             m_min = m[j];
//             m[i] = m_min;
//             m[j] = mm;
//         }
//     }
// }


// function srt(str){
//   var i,j,temp;
//   for(i = 0, j=str.length-1; i < j; i++, j--){
//     temp = str[i];
//     str[i] = str[j];
//     str[j] = temp;
//   }
//   return str;
// }
// console.log(srt('hello, world!'));

// function largestOfFour(arr) {
//   var newArr = [];
//   var min = 0;
//   for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//       if(j === 0){
//         min = arr[i][j];
//       }
//       if(arr[i][j] > min){
//         min == arr[i][j];
//       }
      
//     }
//     newArr.push(min);
//   }
//   return newArr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [10400, 1001, 857, 1]]);\

// function bouncer(arr) {
//   var newArr = arr.filter(function(item,i){
//   	if(item){
//   		return item;
//   	}
//   });
// }

// bouncer([7, "ate", "", false, 9]);


// function destroyer(arr) {
//   var newArr = arr.filter(function(number){
//     for (var j = 1; j < arguments.length; j++) {
//       if(!(number === arguments[j])){
//         return number;
//       }
//     }
//   });
//   return newArr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// function LinearSearch(t,A)      // t - искомый элемент,
// {                               // A - массив, в котором ищем.
//     var n = A.length, i = 0;   
    
//     A[n] = t;
    
//     while (A[ i ] !== t) i++;
                                
//     if (i < n) return i;          // На выходе индекс искомого элемента.
//     else return -1;               // Если искомого элемента нет в массиве, то -1.
// }


// var A =[2,4,6,245,734,746];

// var t =2435;

// console.log(LinearSearch(t,A));

// function sol(str) {
// 	ver nstr = "";

// 	for(var i = 0; i < str.length; i++){
// 		if(i == 0){
// 			nstr + = str[i].toUpperCase();
// 		}
		
// 	}
// }


// function getIndexToIns(arr, num) {
//   var newarr = arr.sort(function(a,b){
//     return a > b;
//   });
  
//   for(var i = 0; i < newarr.length; i++){
//     if(arr[i] >= num){
//       return i;
//     }
//   }
//   return i;
// }

// getIndexToIns([2, 5, 10], 15);


// const sum = (str) => {
//   let result = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     result += Number(str[i]);
//   }

//   return result;
// };

// const addDigits = (num) => {
//   let result = num;
//   while (result >= 10) {
//     result = sum(String(result));
//   }

//   return result;
// };




// addDigits(10);
// addDigits(19);
// addDigits(0);
// addDigits(999999);

// var calculator = {
//   read : function() {
// 	  this.x = prompt("Введите число");
// 	  this.y = prompt("Введите число");
//   },
//   sum : function(){
//   	return +this.x + +this.y;
//   },
//   mul : function(){
//   	return this.x * this.y;
//   }
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// function Calculator(){
//   this.read = function() {
// 	  this.x = prompt("Введите число");
// 	  this.y = prompt("Введите число");
//   }

//   this.sum = function(){
//   	return +this.x + +this.y;
//   }

//   this.mul = function(){
//   	return this.x * this.y;
//   }
// }

// var calculator = new Calculator();
// calculator.read();
// console.log(calculator);
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

// function Accumulator(a) {
// 	this.value  = a;

// 	this.read = function(){
// 		this.value += +prompt("number");
// 	}
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value() ); // выведет текущее значение


// function palindrome(str) {
//   var oldStr = str.replace(/[\W_]/g, '').toLowerCase();
//   var newStr = str.replace(/[\W_]/g, '').toLowerCase().split("").reverse().join(" ");
//   if(newStr === oldStr){
//     return true;
//   }
//   return false;
// }



// palindrome("_eye");




// palindrome("_eye");




// function mutation(arr) {
//   var count = 0;
//   for(var i = 0; i < arr[1].length; i++){
//   	var newNum = arr[1][i].toUpperCase();
//     var num = arr[0].toUpperCase().indexOf(newNum);
//     if(num !== -1){
//       count++;
//     }
//   }

//   if(count == arr[1].length){
//     return true;
//   }
//   return false;
// }

// mutation(["hello", "hey"]);


// function CipherOfCaesar()
// {
// var rusCapitals = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
// var rusLLowercase = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
// var str = "ВЛАД"; 
// str = str.split('');
// var strShifr = [],
// 		newStr,
// 		a,  
// 		i = 0;
// for(i;i<str.length;i++){
//     if(str[i].toLowerCase() == str[i]){
//         a = rusCapitals.indexOf(str[i])+3;
        
//         if(str[i] == "в"){
//             а = 0;
//         }
//         if(str[i] == "л"){
//             a = 1;
//         }
//         if(str[i] == "а"){
//             a = 2;
//         }
//         if(str[i] == "д"){
//             a = 3;
//         }
//         strShifr.push(rusCapitals[a]);
//     }
//     if(str[i].toUpperCase() == str[i]){
//         a = rusLLowercase.indexOf(str[i])+3;
        
//         if(str[i] == "В"){
//             а = 0;
//         }
//         if(str[i] == "Л"){
//             a = 1;
//         }
//         if(str[i] == "А"){
//             a = 2;
//         }
//        	if(str[i] == "Д"){
//             a = 2;
//         }
//         strShifr.push(rusLLowercase[a]);
//     }
// }
// newStr = strShifr.join('');
// document.write(newStr);
// }



// function destroyer(arr) {
//   var newArr = [];
//   for(var i = 1; i <arguments.length; i++){
//     newArr.push(arguments[i]);
//   }
  
//   var rez = arr.filter(function(item){
//     for(var j = 0; j < newArr.length; j++){
//       if(item == newArr[j]){
//         var num = item;
//         continue;
//       }
//       if(num !== item){
//       	return item;
//       }
//     }

//   });
//   return rez;
// }

// alert(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// function validatePIN (pin) {
//   let num = Number(pin);
  
//   if(typeof num == "number" && !isNaN(num) && (String(num).length == 4 || String(num).length == 6))
//   {
//     return true;
//   }
//   return false;
// }
// validatePIN("0000");
// validatePIN("33  95");
// validatePIN("8u30");

// var arr = [1,2,43,42,56,34,86,3,5,54];
// var narr1 = [];
// for(var i = 0; i < arr.length; i++){
//   if(arr[i] % 2 === 0){
//     narr1.push(arr[i]);
//     arr[i] = 0;
//   }
// }

// var narr1 = narr1.sort(function(a,b){
//   return a-b;
// })

// for(var j = 0; j < narr1.length; j++){
//   for(var k = 0;k < arr.length; k++){
//     if(arr[k] === 0){
//       arr[k] == narr1[j];
//       continue;
//     }
//   }
// }

// console.log(arr);
// console.log(narr);

// function stray(numbers) {
//   let k = numbers[0];
//   for(let i = 1; i<numbers.length;i++){
//     if(numbers[i] == k){
//       continue;
//     } else if(numbers[i] != numbers[i-1] && numbers[i] != numbers[i+1]){
//       return k = numbers[i];
//     }
//   }
//   return k;
// }

// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }

// function stray(numbers) {
//   var a = numbers.sort();
  
//   if(a[0] != a[1]) {
//     return a[0]
//   } 
//   return a[a.length-1]
// }

// alert(stray([5, 5, 8,]));

// function SeriesSum(n)
// {
//   var sum = 1;
//   if(n == 1){
//   	return "1.00";
//   }
//   for(let i = 1; i < n; i++){
//     if(i >= 2){
//     	sum += 1/(0.4 + (i*0.3));
//     } else {
//     	sum += (1/4);
//     }
//   }
//   return String(sum);
// }

// SeriesSum(5);


// function isIsogram(str){
//   let obj = {}
  
//   for(let i = 0; i<str.length;i++){
//     obj[i] = str[i].toUpperCase();
//   }
//   for(let j = 0; j<str.length;j++) {
//     if(str[j].toUpperCase() == obj[str[j].toUpperCase()]){
//       obj[str[j]] = obj[str[j]] + 1;
//     }
//   }
//   for(let k in obj){
  	
//   }
//   for(let o in obj){
//     if(o > 1){
//       return false;
//     }
//     return true;
//   }
// }


// isIsogram("Dermatoglyphics");
// isIsogram("Afa");

// function sortArray(array) {
  
//   let arr = array.filter(function(a){
//     if(a % 2 !== 0){
//       return a;
//     }
//   })
//   arr.sort(function(a,b){
//     return a - b;
//   })
//   let k = 0;
//   for(let i = 0; i<array.length; i++){
//     if(array[i] % 2 !== 0){
//       array[i] = arr[k];
//       k++;
//     }
//   }
//   return array;
// }

// sortArray([5, 3, 2, 8, 1, 4]);

function descendingOrder(n){
  let str = String(n);
  let rez = str.split("").reverse().join("");
  return +rez;
}

alert(descendingOrder(2110));
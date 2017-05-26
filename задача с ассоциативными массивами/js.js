// 1
var man = {
	"name" : "Alex",
	"age" : 67,
	"id" : "223344",
	"sex" : "male"
};

// console.log(man);
// console.log(man.name);
// console.log(man["name"]);
// var a = "name";
// console.log(man[a]);

// 2
var man2 = {
	"name" : "Alex",
	"age" : 67,
	"id" : "223344",
	"sex" : "male",
	"year" : function() {
		return 2017 - this.age
	}
};
console.log(man2.year());

// 3

var m = {
	"mas" : [5, 6, 34, 12, 45],
	"sum" : function() {
		var num = 0;
		for (var i = 0; i<this.mas.length; i++){
			num += this.mas[i];
		}
		return num;
	}
}
console.log(m.sum());
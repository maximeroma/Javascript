var foo = function(a, b){
	console.log(a + b);
}

var bar = function (a, b) {
	console.log(a - b);	
}

var multiple = function (a, b){
	console.log (a * b);
}

var division = function(a, b){
	if(b > 0) {
		console.log(a/b);
	} else {
		console.log("Can't divide by 0");
	}	
}
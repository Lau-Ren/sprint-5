// Looping a Triangle:

var hashes = ""
for (var i =1; i <= 7; i++) {
	hashes += "#"
	console.log(hashes)// Your code here.
}


// FizzBuzz

for (var i =1; i <=100; i++) {
	if (i % 3 === 0 && i % 5 !== 0) {
		console.log("Fizz");
	}else if (i % 3 !== 0 && i % 5 ===0) {
		console.log("Buzz")
	}else if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	}else {
		console.log(i)
	}
}

// Chess Board

var row = ""
var size = 8
for (var i = 1; i <= size; i++) {
	for (var j = 1; j <= size; j++) {
    	if ((j+i) % 2 === 0) {
          row += " "
        
        } else {
           row += "#"
        }
    }
console.log(row)
row = ""
}
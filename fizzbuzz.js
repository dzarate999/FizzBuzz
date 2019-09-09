for (let number = 1; number <=100; number ++) {
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
}

/*
My Original Attempt
for (let number = 1; number <=100; number = number +1) {
    if ( number % 3 == 0 & number % 5 == 0) {
        console.log("FizzBuzz"); 
    } else if ( number % 5 == 0) {
        console.log("Buzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else {  
    console.log(number);
    }
} 
*/
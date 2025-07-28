/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
// simplest if-else condition

let num1 = 37;
let num2 = 7;

let result;

// Simple if-else
    if (num1>num2){
        result = num1*2;
    }
    else {
        result = num1 + num2;
    }

    console.log(result);

    //if-else using ternary operators

    let num3 = 17;
    let num4 = 7;   

    let result2 = (num3 > num4) ? num3 * 2 : num3 + num4; //here : means else
    console.log(result2);

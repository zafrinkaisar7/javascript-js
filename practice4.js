/* Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.

 */

var a = isNaN('11');
// The isNaN function checks if the value is NaN (Not-a-Number).    
// Since '11' is a string that can be converted to a number, isNaN('11') returns false.
console.log(a); // Output: false

var b = isNaN(2 - 10);
// The expression 2 - 10 evaluates to -8, which is a valid number.
// Therefore, isNaN(2 - 10) returns false.
console.log(b); // Output: false

var c = isNaN('ABC');
console.log(c); // Output: true

// Explanation:
// isNaN checks if the value is NaN. In both cases, the values are valid numbers or can be converted to valid numbers, so isNaN returns false.
// '11' is a string that represents a number, and 2 - 10 results in a valid number (-8).
// Thus, both expressions evaluate to false.    
// Both outputs are false, indicating that neither '11' nor the result of 2 - 10 is NaN.
// Therefore, the final output for both cases is false.
// Conclusion:
// isNaN('11') returns false because '11' can be converted to a number
// isNaN(2 - 10) returns false because the result of the operation is a valid number (-8).
// Hence, both expressions confirm that they do not result in NaN.
// Final output:
// false
// false
// Both expressions confirm that they do not result in NaN.


/*Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04 */


// Given Input values of the five subjects
let mathematicsMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;    
let physicsMarks = 35.45;
let banglaMarks = 99.50;

// Calculate the average marks
let totalMarks = (mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks);

// Calculate the average by dividing total marks by the number of subjects
let averageMarks = totalMarks / 5;

// Output the result rounded to 2 decimal places
console.log(averageMarks.toFixed(2));
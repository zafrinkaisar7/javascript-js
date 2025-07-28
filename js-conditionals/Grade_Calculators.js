/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 92; // Example score input

// Function to determine the grade based on the score
let grade;

if (score >= 90 && score <= 100) {
    grade = 'A+';
}   
else if (score >= 80 && score < 90) {
    grade = 'B+';
} else if (score >= 70 && score < 80) {
    grade = 'C+';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else if (score >= 0 && score < 60) {
    grade = 'F';
} else {
    grade = 'Invalid score'; // Handle invalid scores
}   

//Result Output
console.log(`The grade for a score of ${score} is: ${grade}`);
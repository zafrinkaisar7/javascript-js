/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ChildrenAge = 9;
let Students = true;
let SeniorCitizen = 70;
let RegularFare = 800;

function calculateFare(age, isStudent, isSeniorCitizen) {
    if (age < 10) {
        return 0; // Free for children
    }
    if (isStudent) {
        return RegularFare * 0.5; // 50% discount for students
    }
    if (isSeniorCitizen) {
        return RegularFare * 0.85; // 15% discount for senior citizens
    }
    else {
        return RegularFare; // Regular fare for others
    }

}

console.log("Children Fare: " + calculateFare(ChildrenAge, false, false) + " tk");
console.log("Student Fare: " + calculateFare(20, true, false) + " tk");
console.log("Senior Citizen Fare: " + calculateFare(60, false, true) + " tk");
console.log("Regular Fare: " + calculateFare(30, false, false) + " tk");


// var firstName = prompt("Enter Your First Name:");
// var lastName = prompt("Enter Your Last Name:");
// alert("Hello Mr. " + firstName + " " + lastName);
// var userAge = prompt("Enter Your Age:");
// alert("You are just " + userAge + " years old");

// var city = prompt("Where do you live");
// if (city === "Karachi") {
//     alert("Welcome to Karachi.. \nThe City Of Thiefs, Robbers, Kidnapers.");
// }


// var percentage = prompt("Enter your Percentage");
// var message = "";

// if (percentage >= 80 && percentage <= 100) {
//     message = "A+";
// }
// else if (percentage >= 70 && percentage <= 80) {
//     message = "A";
// }
// else if (percentage >= 60 && percentage <= 70) {
//     message = "B";
// }
// else if (percentage >= 50 && percentage <= 60) {
//     message = "C";
// }
// else if (percentage >= 40 && percentage <= 50) {
//     message = "D";
// }
// else if (percentage >= 33 && percentage <= 40) {
//     message = "E";
// }
// else if (percentage >= 0 && percentage <= 33) {
//     message = "FAIL";
// }
// else {
//     message = "Enter Correct %age"
// }
// alert(message);





// var userAge = +prompt("Enter your Age");
// var userWeight = +prompt("Enter your Weight");
// var userGender = prompt("Enter your Gender");

// if (userAge >= 21 && userWeight === 86 && userGender === "male") {
//     alert("You are Fit");
// }
// else if (userAge >= 21 && userWeight >= 86 && userGender === "male") {
//     alert("You are Fat");
// }
// else if (userAge >= 21 && userWeight <= 86 && userGender === "male") {
//     alert("You need Protien");
// }
// else {
//     alert("Sorry!!");
// }



// USER INPUT & CONDITIONAL STATEMENT

// Q no:1
// var city = prompt("Enter City name");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }

// Q no:2
// var gender = prompt("Enter your Gender(in small letters)");
// if (gender === "male") {
//     alert("Good Morning Sir!");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma'am!");
// }

// Q no:3
// var signalColor = prompt("Tell us the Signal Color(in small letters)");
// if (gender === "red") {
//     alert("Must Stop");
// }
// else if (gender === "yellow") {
//     alert("Ready to Move");
// }
// else if (gender === "green") {
//     alert("Move Now");
// }

// Q no:4
// var fuelCar = +prompt("Emter Remaining Fuel in your Car(in liters)");
// if (fuelCar <= 0.25) {
//     alert("Please refill the fuel in your car");
// }

// Q no:5
// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// Result is True

// b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// Result is False

// c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// Result is False

// if (c === 13) {
//     alert("condition 2 is true");
// }
// Result is True

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// Result is False

// if (c === 14) {
//     alert("condition 4 is true");
// }
// Result is True

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// Result is True

// e
// if (true) {
//     alert("True");
// }
// Result is True

// if (false) {
//     alert("False");
//     // Result is False
// }
// f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// Result is True


// Q no:6
// document.write("<h1>MarkSheet</h1>");
// var englishMarks = +prompt("Enter English Numbers");
// var mathsMarks = +prompt("Enter Maths Numbers");
// var physicsMarks = +prompt("Enter Physics Numbers");
// var totalMarks = 300;
// document.write("<br>Total Marks: " + totalMarks);
// var obtainedMarks = englishMarks + mathsMarks + physicsMarks;
// document.write("<br>Obtained Marks: " + obtainedMarks);
// var _percentage = (englishMarks + mathsMarks + physicsMarks) * 100 / 300;
// document.write("<br>Percentage: " + _percentage + "%");
// if (_percentage >= 80 && _percentage <= 100) {
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }
// else if (_percentage >= 70 && _percentage <= 80) {
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }
// else if (_percentage >= 60 && _percentage <= 70) {
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }
// else if (_percentage >= 0 && _percentage <= 60) {
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// }

// Q no:7
// var num7a = 7;
// var num7b = +prompt("Enter a Number");
// if(num7b === num7a){
//     alert("Bingo! Correct Answer");
// }
// if(num7b === ++num7a){
//     alert("Close enough to the correct answer");
// }

// Q no:8
// var number8 = +prompt("Enter a Number");
// if( number8 % 3 == 0){
//     alert("This Number is Divisible by Three");
// }

// // Q no:9
// var num9 = +prompt("Enter a number");
// if(num9%2==0){
//     alert(num9 + " is an Even Number"); 
// }
// else{
//     alert(num9 + " is an Odd Number");
// }

// // Q no:10
// var T = +prompt("Enter Temperature");
// if(T >= 40){
//     alert("Its too Hot Outside");
// }
// else if(T >= 30){
//     alert("The Weather Today is Normal");
// }
// else if(T >= 20){
//     alert("Today's Weather is Cool");
// }
// else{
//     alert("OMG! Today's Weather is so Cool");
// }

// // Q no:11
// var firstNumber = +prompt("Enter First Number");
// var mathsOperation = prompt("Select Operation (+, -, *, /, %)");
// var secondNumber = +prompt("Enter Second Number");
// var res = "";
// if(mathsOperation === "+"){
//     res = firstNumber + secondNumber;
// }
// else if(mathsOperation === "-"){
//     res = firstNumber - secondNumber;
// }
// else if(mathsOperation === "*"){
//     res = firstNumber * secondNumber;
// }
// else if(mathsOperation === "/"){
//     res = firstNumber / secondNumber;
// }
// else if(mathsOperation === "%"){
//     res = firstNumber % secondNumber;
// }
// alert(res);










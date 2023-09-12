// Chp 6-9

// Q no:1
// var num1 = +prompt("Enter a Number");
// document.write("<h1>Result:</h1>");
// document.write("The value of Number is: " + num1);
// document.write("<br><hr>");
// document.write("<br>");
// document.write("<br>The value of ++Number is: " + ++num1);
// document.write("<br>Now the value of Number is: " + num1);
// document.write("<br>");
// document.write("<br>");

// document.write("<br>The value of Number++ is: " + num1++);
// document.write("<br>Now the value of Number is: " + num1);
// document.write("<br>");
// document.write("<br>");

// document.write("<br>The value of --Number is: " + --num1);
// document.write("<br>Now the value of Number is: " + num1);
// document.write("<br>");
// document.write("<br>");

// document.write("<br>The value of Number-- is: " + num1--);
// document.write("<br>Now the value of Number is: " + num1);

// Q no:2
// var a = 2, b = 1;
// document.write("a is " + a);
// document.write("<br>b is " + b);
// var result = --a - --b + ++b + b--;
// document.write("<br>result is " + result);

// Explaination
// --a - --b + ++b + b--
//   1 -   0 +   1 + 1 = 3

// Q no:3
// var userName = prompt("Enter Your Name");
// alert("Welcome Mr. " + userName);

// Q no:4
// var userTable = +prompt("Enter a Number for Table");
// var i = 0;
// if(userTable >=0 && userTable <= 999){
//     for (i = 1; i <= 10; i++) {
//       document.write("<br>" + userTable + " x " + i + " = " + userTable * i);
//     }
// }
// else{
//     userTable = 5
//     for (i = 1; i <= 10; i++) {
//         document.write("<br>" + userTable + " x " + i + " = " + userTable * i);
//       }
// }

// Q no:5
// var engMarks = +prompt("Enter English Subject Marks");
// var pstMarks = +prompt("Enter Pak Studies Subject Marks");
// var mathsMarks = +prompt("Enter Maths Subject Marks");
// var totalMarks = 100;
// var obtMarks = engMarks + pstMarks + mathsMarks;
// document.write("<table>")
// document.write("<tr><th>Subjects</th><th>TotalMarks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
// document.write("<tr><td>English</td><td>" + totalMarks + "</td><td>" + engMarks + "</td><td>" + engMarks * 100 /100 + "%" + "</td></tr>")
// document.write("<tr><td>English</td><td>" + totalMarks + "</td><td>" + pstMarks + "</td><td>" + pstMarks * 100 /100 + "%" + "</td></tr>")
// document.write("<tr><td>English</td><td>" + totalMarks + "</td><td>" + mathsMarks + "</td><td>" + mathsMarks * 100 /100 + "%" + "</td></tr>")
// document.write("<tr><td>English</td><td>" + totalMarks * 3 + "</td><td>" + obtMarks + "</td><td>" + obtMarks * 100 /300 + "%" + "</td></tr>")


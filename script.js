// ASIGNMENT 01
document.write("ASSIGNMENT 01");
document.write("<br>");
document.write("<br>");

// Loop Assignments
document.write("Loop Assignments:");
document.write("<br>");
document.write("<br>");

// 1. Print Numbers:
document.write("1. Print Numbers:");
document.write("<br>");
document.write("<br>");

// Write a loop that prints numbers from 1 to 10 using both a for loop and a while loop.

// for Loop
document.write("For Loop");
document.write("<br>");

for(var myNum = 1; myNum <= 10; myNum++){
    document.write(myNum, "<br>");
}

document.write("<br>");

// while loop
document.write("While Loop");
document.write("<br>");

var int = 1;
while(int <= 10){
    document.write(int, "<br>");
    int++;
}

document.write("<br>");

// 2. Sum of Numbers:
document.write("2. Sum of  Numbers:");
document.write("<br>");
document.write("<br>");

// Calculate and print the sum of numbers from 1 to 50 using both a for loop and a while loop.

//  for Loop
document.write("For Loop");
document.write("<br>");
document.write("<br>");

var sum = 0;
for (var i = 1; i <= 50; i++) {
     sum += i;
     document.write("Sum:", sum , "<br>");
}
 
document.write("<br>");

// while loop
document.write("While Loop");
document.write("<br>");

var sum = 0;
var i = 1;
while(i <= 50){
    sum += i;
    document.write(sum, "<br>");
    i++;
}

document.write("<br>");

// 3. Even Numbers:
document.write("3. Even Numbers:");
document.write("<br>");
document.write("<br>");

// Print all even numbers between 20 and 30 using both a for loop and a while loop.

// for loop
document.write("For Loop");
document.write("<br>");

for(i = 20; i <= 30; i++){
    if(i % 2 === 0){
    document.write(i , "<br>");
    }
}

document.write("<br>");

// while loop
document.write("While Loop");
document.write("<br>");

var i = 20;
while(i <= 30){
    i++;
    if(i % 2 === 0){
        document.write(i , "<br>")
    }
}

document.write("<br>");

// 4. Reverse Order:
document.write("4. Reverse Order:");
document.write("<br>");
document.write("<br>")

// Print numbers from 10 to 1 in reverse order using both a for loop and a while loop.

// for loop
document.write("For Loop");
document.write("<br>");

for(var i = 10; i >=1; i--){
    document.write(i , "<br>");
}
 
document.write("<br>");

// while loop
document.write("While Loop");
document.write("<br>");

var i = 10;
while(i >= 1){
    document.write(i , "<br>");
    i--;
}

document.write("<br>");

// 5. Multiplication Table:
document.write("5. Multiplication Table:");
document.write("<br>");
document.write("<br>")

// Display the multiplication table (up to 10) for a given number using both a for loop and a while loop.

// for loop
document.write("For Loop");
document.write("<br>");

var t = 4;
for(var i = 1; i <= 10; i++){
    document.write(t ," " , "x" , " " , i , " " , "=" , " " , i*t , "<br>");
}

document.write("<br>");

// while loop
document.write("While Loop");
document.write("<br>");

var  t=5;
var  i=1;
while(i<=10)
{
    document.write(t ," " , "x" , " " , i , " " , "=" , " " , i*t , "<br>");
i++;
}

document.write("<br>");
document.write("<br>");

// ASIGNMENT 02
document.write("ASSIGNMENT 02");
document.write("<br>");
document.write("<br>");

// Jumping Assignments
document.write("Jumping Assignments:");
document.write("<br>");
document.write("<br>");

// 1. Even Numbers Skip:
document.write("1. Even Numbers Skip:");
document.write("<br>");
document.write("<br>");

/* Write a loop that prints all even numbers between 1 and 10, but use the `continue` keyword to skip printing the number 6. */

// for loop
document.write("For Loop");
document.write("<br>");

for(i = 1; i <= 10; i++){
    if (i === 6) {
        // Skip the number 6
        continue;
    }
    if(i % 2 === 0){
    document.write(i , "<br>");
    }
}

document.write("<br>");

// 2. Numbers Search:
document.write("2. Numbers Search:");
document.write("<br>");
document.write("<br>");

/* Write a loop that iterates from 1 to 5 and uses the `break` keyword to stop the loop when it finds the number 3. */

for(i = 1; i <= 5; i++){
    if (i === 3) {
        document.write("Number 3 is found");
        break;
    }
    document.write(i , "<br>");
}







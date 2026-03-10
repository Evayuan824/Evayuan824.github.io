// introduction
let name = prompt("Hello! Before we get started, what's your name?");
alert("Hi " + name + "! it's so nice to meet you!");
alert("In this simulation, you'll give me a few numbers and I'll show you what I can do with them!")

// user input
let numInput1 = prompt("To start, please enter a value:");
let num1 = Number(numInput1);
let numInput2 = prompt("Please enter a second value:");
let num2 = Number(numInput2);

// simple math
alert("Here are the different mathematical combinations I can make with " + num1 + " and " + num2 + "!");
let addition = num1 + num2;
alert("If you add " + num1 + " and " + num2 + ", you get " + addition + "!");
let subtraction = num1 - num2; 
alert("If you subtract " + num1 + " and " + num2 + ", you get " + subtraction + "!");
let multiplication = num1 * num2;
alert("If you multiply " + num1 + " and " + num2 + ", you get " + multiplication + "!");
let division = num1 / num2;
alert("If you divide " + num1 + " and " + num2 + ", you get " + division + "!") ;
let modulo = num1 % num2;
alert("The modulo of " + num1 + " and " + num2 + " is " + modulo + "!");
let maximum = Math.max(num1, num2);
alert("The max of " + num1 + " and " + num2 + " is " + maximum + "!");
let minimum = Math.min(num1, num2);
alert("The min of " + num1 + " and " + num2 + " is " + minimum + "!");

// advanced math 
alert("Okay great! Now let's step it up a notch!"); 
let decimalInput = prompt("To start, please enter a decimal:");
while (!decimalInput.includes(".")) {
  alert("That is not a decimal. Please try again.");
  decimalInput = prompt("To start, please enter a decimal:");
}
let dec = Number(decimalInput);
alert("Thanks! Let me show you what I can do with " + dec + "!");
let negative = -dec
alert("The negative of " + dec + " is " + negative + "!");
let sine = Math.sin(dec);
alert("The sine of " + dec + " is " + sine + "!");
let cosine = Math.cos(dec);
alert("The cosine of " + dec + " is " + cosine + "!");
let power = dec ** 10;
alert(dec + " to the power of 10 is " + power + "!");
let squareRoot = Math.sqrt(dec);
alert("The square root of " + dec + " is " + squareRoot + "!");
let roundValue = Math.round(dec);
alert(dec + " rounded to the nearest integer is " + roundValue + "!");
let floorValue = Math.floor(dec);
alert("The floor of " + dec + " is " + floorValue + "!");
let ceilingValue = Math.ceil(dec);
alert("The ceiling of " + dec + " is " + ceilingValue + "!");
let absolute = Math.abs(dec);
alert("The absolute of " + dec + " is " + absolute + "!");

// end
alert("Thanks for playing along " + name + ", see you next time!");

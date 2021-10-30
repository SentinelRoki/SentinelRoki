// Variables

var myName = "Milos" // String Variable

myName = 8

let ourName = "ValorantGamers" // Variable with Let

const pi = 3.14 // Variable with Const

// Storing Values with Assignment Operator

var a; // Defining the Variable A
var b = 2; // 2 Is Assigned to B automatically

a = 7 // 7 was assigned to A

b = a; // A assigned to B

console.log(a) // Console.log(in here put any variable) shows the input

// Initializing Variables with Assignment Operator

var a = 9;

// Uninitialized Variables
var a = 5;
var b = 10;
var c = "String";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Case sensitivity in Variables

// Declaring Var's
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// They have to be the same capitalization

// Adding Numbers:

var sum = 10 + 10;
console.log(sum)

// Subtracting Numbers

var difference = 45 - 33;
console.log(difference)

// Multiplying Numbers
var product = 8 * 9;
console.log(product)

// Dividing Numbers
var quotient = 66 / 2;
console.log(quotient)

// Incrementing numbers (Adding +1 to it)

var myVar = 87

myVar++; // Adds +1 to the variable

// Decrementing numbers (Removing -1 from it)

var myPig = 11;

myPig-- // Subtracts 1

// Decimal Numbers

var ourDecimal = 5.7;

var myDecimal = 0.009

// Multiply Decimals
var multipltyDecimal = 5.7 * 2.5;
console.log(multipltyDecimal)

// Divide Decimals
var divideDecimal = 4.4 / 2.0;
console.log(divideDecimal)
    
// Finding a Remainder

var remainder;
remainder = 11 % 3;

// Compound Assignment with Augmented Addition
var a = 3
var b = 17
var c = 12

a += 12;
b += 15;
c += 20;

// Same goes for removing, multiplying etc.

// Declare string variables

var firstName = "Milos";
var lastName = "Rosandic";

var myFirstName = "Borjan";
var myLastName = "Pavlovic";

// Escpaing Literal Quotes in Strings

var myStr = "I am a \"quote inside a quote\"";
console.log(myStr)

// Escape Sequences in Strings

/*****
 * CODE OUTPUT
 * \' single quote
 * \"" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 * *****/

// Using + to add onto strings
var randomString = "I come first. " + "I come second."

var cringeStr = "This is the start. " + "This is the end."

var ourStr = "I come first. ";
ourStr += "I come second.";

// Constructing strings with variables

var ourName = "Rokishi"
var ourSTr = "Hello, our name is " + ourName + ", how are you?";

// Appending Variables to strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective

// Find lenght of string and Bracket notation to find first character in string

var firstNamelenght = 0;
var firstLetterOfFirstname = "";
var firstName = "Ada";

firstLetterOfFirstname = firstName[0];

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Example
lastNameLength = lastName.length;
console.log(lastNameLength)

// String Immutability
var myStr = "Jello world";

myStr = "Hello world";

// Bracket Notation to Find NTH Character in String

var firstname = "Ada"
var secondLetterOfFirstName = firstName[1]

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// Bracket notation to find last character in string
var firstname = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];

// World Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + " " + myNoun + " " + myVerb + " " + " to the store " + " " + myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Store multiple values with arrays
var ourArray = ["John", 23];

var myArray = ["Milos", 1];

// Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101010]];

// Access array data with index
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

var myArray = [50,60,70]
var myData = myArray[0];
console.log(myData)

// Modify array data with index
var ourArray = [18,64,99];
ourArray[1] = 45 // ourArray now equals [18,45,99]

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray)

// Access multi-dimensional arrays with index
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];
console.log(myData)

// Push function


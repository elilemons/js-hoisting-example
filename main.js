// "use strict";

/**
 * When JS gets itself ready to talk to the browser, the first thing it does
 * is HOIST all of the variables up to the top of the file.
 * 
 * This is why you can call a function BEFORE you've actually defined it.
 * 
 * It is also why we use LET and CONST instead of VAR.
 */

// We are able to use exampleVar right away, but exampleLet shows an error
// // logAndDisplay(exampleLet);
// logAndDisplay(exampleVar);
// let exampleLet = 'This is an example let';
// var exampleVar = 'This is an example var';

var newUser = "Adam";
var x = function processList() {
  logAndDisplay(newUser);
  if (true) {
    var newUser =  "Yasmine";
  }
}
logAndDisplay(processList()) // "undefined" 
// var newUser = "Yasmine" gets hoisted to the top of processList function block 
//// but does not bring the declaration

/**
 * 
 * @param {String} message The message you'd like added to the UI console and the actual console.
 */
function logAndDisplay(message) {
    let htmlConsoleLog = document.getElementById('console-log');
    htmlConsoleLog.innerText += `${message}\n`;
    console.log(message);
}
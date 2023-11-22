/************************************************** */
/****************YOUR CODE HERE************* */
function add(num1, num2){
console.log(num1 + num2)
}

function subtract(num1, num2){
console.log(num1 - num2)    
}

function multiply(num1, num2){
console.log(num1 * num2)    
}

function divide(num1, num2){
console.log(num1 / num2)
}

function square(){
    
}














/******************************OUR CODE BELOW******************************** */

if (typeof add === 'undefined') {
    console.log(add)
    add = undefined;
}
if (typeof subtract === 'undefined') {
    subtract = undefined;
}
if (typeof multiply === 'undefined') {
    multiply = undefined;
}
if (typeof divide === 'undefined') {
    divide = undefined;
}
if (typeof square === 'undefined') {
    square = undefined;
}
if (typeof squareRoot === 'undefined') {
    squareRoot = undefined;
}
if (typeof concatenate === 'undefined') {
    concatenate = undefined;
}

module.exports = { add, subtract, multiply, divide, square, squareRoot, concatenate }

"use strict";

const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

const operate = function (numOne, numTwo) {
  return divide(numOne, numTwo);
};

console.log(operate(5, 5));

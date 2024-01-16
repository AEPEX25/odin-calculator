"use strict";

const display = document.querySelector(".on-display");

const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

const operate = function (numOne, numTwo) {
  return divide(numOne, numTwo);
};

function onDisplay(button) {
  let btnValues = button.value;
  display.textContent = `${btnValues}`;
  return btnValues;
}

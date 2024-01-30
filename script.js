"use strict";

let operator = "";
let previousValue = "";
let currentValue = "";
let result = "";

document.addEventListener("DOMContentLoaded", function () {
  const clear = document.querySelector(".all-clear");
  const equal = document.querySelector(".btn-equal");
  const decimal = document.querySelector(".btn-decimal");

  let displayCurrentValue = document.querySelector(".current-value");
  let displayPreviousValue = document.querySelector(".previous-value");
  let operants = document.querySelectorAll(".btn-operant");
  let numbers = document.querySelectorAll(".btn-number");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      displayCurrentValue.textContent = currentValue;
    })
  );

  operants.forEach((operant) =>
    operant.addEventListener("click", function (e) {
      handleOperant(e.target.textContent);
      displayCurrentValue.textContent = operator;
      displayPreviousValue.textContent = `${previousValue} ${operator}`;
      /*
      if (previousValue != "" && currentValue != "") {
        handleCalculation();
        displayCurrentValue.textContent = "0";
        currentValue = "";
        previousValue = result;
        result = "";
        displayPreviousValue.textContent = previousValue;
        console.log(previousValue, currentValue, result);
      }
      */
    })
  );

  equal.addEventListener("click", function () {
    handleCalculation();
    displayCurrentValue.textContent = "0";
    currentValue = "";
    previousValue = result;
    displayPreviousValue.textContent = previousValue;
    displayCurrentValue.textContent = previousValue;
  });

  clear.addEventListener("click", function () {
    operator = "";
    previousValue = "";
    currentValue = "";
    result = "";
    displayPreviousValue.textContent = "";
    displayCurrentValue.textContent = "";
    console.log(operator, previousValue, currentValue, result);
  });
});

const handleNumber = function (num) {
  currentValue += num;
};

const handleOperant = function (op) {
  operator = op;
  if (previousValue == "") {
    previousValue = currentValue;
  }
  currentValue = "";
};

const handleCalculation = function () {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  if (operator === "+") {
    result = previousValue + currentValue;
  } else if (operator === "-") {
    result = previousValue - currentValue;
  } else if (operator === "*") {
    result = previousValue * currentValue;
  } else if (operator === "/") {
    result = previousValue / currentValue;
  }
};

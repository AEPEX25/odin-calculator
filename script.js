"use strict";

let operator = "";
let previousValue = "";
let currentValue = "";

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
      currentValue = "";
    })
  );

  equal.addEventListener("click", function () {
    handleCalculation();
    displayCurrentValue.textContent = currentValue;
  });

  clear.addEventListener("click", function () {
    operator = "";
    previousValue = "";
    currentValue = "";
    displayPreviousValue.textContent = "";
    displayCurrentValue.textContent = "";
  });
});

const handleNumber = function (num) {
  currentValue += num;
};

const handleOperant = function (op) {
  previousValue = currentValue;
  operator = op;
  currentValue = "";
};

const handleCalculation = function () {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  if (operator === "+") {
    currentValue += previousValue;
  } else if (operator === "-") {
    currentValue -= previousValue;
  } else if (operator === "*") {
    currentValue *= previousValue;
  } else if (operator === "/") {
    currentValue /= previousValue;
  }
};

"use strict";

let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  const clear = document.querySelector(".all-clear");
  const btnDelete = document.querySelector(".delete");
  const equal = document.querySelector(".btn-equal");
  const decimal = document.querySelector(".btn-decimal");

  let displayCurrentValue = document.querySelector(".current-value");
  let displayPreviousValue = document.querySelector(".previous-value");
  let operants = document.querySelectorAll(".btn-operant");
  let numbers = document.querySelectorAll(".btn-number");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      updateDisplayedValues();
    })
  );

  operants.forEach((operant) =>
    operant.addEventListener("click", function (e) {
      displayCurrentValue.textContent = operator;
      if (currentValue == "") return;
      if (previousValue !== "") {
        if (currentValue == 0 || (previousValue == 0 && operator == "/")) {
          displayCurrentValue.textContent = "ERROR";
          return;
        }
        handleCalculation();
      }
      operator = e.target.textContent;
      previousValue = currentValue;
      displayPreviousValue.textContent = `${previousValue} ${operator}`;
      displayCurrentValue.textContent = currentValue;
      currentValue = "";
    })
  );

  equal.addEventListener("click", function () {
    if (previousValue == "" || currentValue == "") {
      displayCurrentValue.textContent = "ERROR";
      return;
    }
    if (currentValue == 0 || (previousValue == 0 && operator == "/")) {
      displayCurrentValue.textContent = "ERROR";
      return;
    }
    handleCalculation();
    previousValue = "";
    displayPreviousValue.textContent = "";
    displayCurrentValue.textContent = currentValue;
    currentValue = "";
  });

  clear.addEventListener("click", function () {
    operator = "";
    previousValue = "";
    currentValue = "";
    updateDisplayedValues();
  });

  decimal.addEventListener("click", function () {
    addDecimal();
    updateDisplayedValues();
  });

  btnDelete.addEventListener("click", function () {
    currentValue = currentValue.toString().slice(0, -1);
    updateDisplayedValues();
  });

  const updateDisplayedValues = function () {
    if (operator === "") {
      displayPreviousValue.textContent = previousValue;
      displayCurrentValue.textContent = currentValue;
    }
    displayPreviousValue.textContent = `${previousValue} ${operator}`;
    displayCurrentValue.textContent = currentValue;
  };
});

const handleNumber = function (num) {
  currentValue += num;
};

const handleCalculation = function () {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  if (operator === "+") {
    currentValue = previousValue + currentValue;
  } else if (operator === "-") {
    currentValue = previousValue - currentValue;
  } else if (operator === "*") {
    currentValue = previousValue * currentValue;
  } else if (operator === "/") {
    currentValue = previousValue / currentValue;
  }

  return roundNumber(currentValue);
};

const roundNumber = function (num) {
  return Math.round(num * 1000) / 1000;
};

const addDecimal = function () {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
};

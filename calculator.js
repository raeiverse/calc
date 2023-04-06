let result = document.getElementById("result");
let proceeds = "";
let isCalculated = false;

function inputValue(input) {
  if (isCalculated) {
    isCalculated = false;
    value = "";
  }
  if (
    (input === "%" ||
      input === "÷" ||
      input === "x" ||
      input === "-" ||
      input === "+") &&
    (proceeds.endsWith("%") ||
      proceeds.endsWith("÷") ||
      proceeds.endsWith("x") ||
      proceeds.endsWith("-") ||
      proceeds.endsWith("+"))
  ) {
    // do nothing if the previous input was an operator
    proceeds = proceeds.slice(0, -1);
  }
  proceeds += input;
  result.value = proceeds;
}

function clearButton() {
  proceeds = "";
  result.value = "";
}

function calculate() {
  if (isCalculated) {
    return;
  }
  let neutralizeValue = proceeds.replace(/x/, "*").replace(/÷/, "/");
  let total = (result.value = eval(neutralizeValue));
  result.value = Number.isInteger(total) ? total : total;
  proceeds = result.value;
  isCalculated = true;
}

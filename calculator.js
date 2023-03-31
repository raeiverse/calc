let result = document.getElementById("result");
let proceeds = "";
let isCalculated = false;

function inputValue(input) {
  if (isCalculated) {
    isCalculated = false;
    value = "";
  }
  proceeds += input;
  result.value = proceeds;
}

function clearButton() {
  proceeds = "";
  result.value = "";
}

function backspaceButton() {
  proceeds = proceeds.slice(0, -1);
  result.value = proceeds;
}

function calculate() {
  if (isCalculated) {
    return;
  }
  result.value = eval(proceeds);
  proceeds = result.value;
  isCalculated = true;
}

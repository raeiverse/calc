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

function calculate() {
  if (isCalculated) {
    return;
  }
  let neutralizeValue = proceeds.replace(/x/, "*").replace(/÷/, "/");
  let total = (result.value = eval(neutralizeValue));
  result.value = total.toFixed(2);
  proceeds = result.value;
  isCalculated = true;
}

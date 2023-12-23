const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}


// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} oiuuy ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}


function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  };
  
  logEntries.push(logEntry.operation);
  console.log(logEntries);
}


function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'add') {
    currentResult += enteredNumber;
    mathOperator = '+'
  } else {
    currentResult -= enteredNumber;
  }
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}


function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  console.count('-'+ "cliques para diminuir");
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;

  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



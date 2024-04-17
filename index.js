
const form = document.getElementById('input-form');
const grossAnnualIncomeInput = document.getElementById('annual-income');
const extraIncomeInput = document.getElementById('extra-income');
const ageGroupInput = document.getElementById('age-group');
const deductionsInput = document.getElementById('deductions');
const resultContainer = document.getElementById('result-container');
const resultText = document.querySelector('.resultText');
const closeButton = document.querySelector('.close-button');
const formContainer = document.querySelector('.form-container');
const mainContainer = document.querySelector('.main-container');

grossAnnualIncomeInput.addEventListener("change", (e) => {
  let value = e.target.value;

  console.log(value); 

  let lastChar = value[value.length - 1];
  let errorIcon = e.target.closest("div").querySelector(".error-icon");

  if (lastChar >= '0' && lastChar <= '9') {
      errorIcon.style.display = "none";
  } else {
      errorIcon.style.display = "flex";
  }
});


extraIncomeInput.addEventListener("change", (e) => {
  let value = e.target.value;
  let lastChar = value[value.length - 1];
  let errorIcon = e.target.closest("div").querySelector(".error-icon");

  if (lastChar >= '0' && lastChar <= '9') {
      errorIcon.style.display = "none";
  } else {
      errorIcon.style.display = "flex";
  }
});

deductionsInput.addEventListener("change", (e) => {
  let value = e.target.value;
  let lastChar = value[value.length - 1];
  let errorIcon = e.target.closest("div").querySelector(".error-icon");

  if (lastChar >= '0' && lastChar <= '9') {
      errorIcon.style.display = "none";
  } else {
      errorIcon.style.display = "flex";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  calculateTax();
});

function calculateTax() {
  const grossAnnualIncome = parseInt(grossAnnualIncomeInput.value);
  const extraIncome = parseInt(extraIncomeInput.value);
  const ageGroup = ageGroupInput.options[ageGroupInput.selectedIndex].value;
  const deductions = parseInt(deductionsInput.value);

  // console.log("calculate tax");


  const totalIncome = grossAnnualIncome + extraIncome - deductions;
  let taxAmount = 0;
  if (totalIncome <= 800000) {
    taxAmount = 0;
  } else {
    const availableAmountForTax = totalIncome - 800000;
    if(ageGroup === "less than 40")
    {
      taxAmount = 0.3 * availableAmountForTax;
      console.log("hi", taxAmount); 
    }
    else if(ageGroup === "include 40 between exclude 60")
    {
      taxAmount = 0.4 * availableAmountForTax;
    }
    else{
      taxAmount = 0.1 * availableAmountForTax;
    }

  }

  const overallIncome = totalIncome - taxAmount;
  showResult(overallIncome);
}

function showResult(overallIncome) {
  mainContainer.style.display = 'none';
  resultText.textContent = `${overallIncome}`;
  resultContainer.style.display = 'flex';
 
}

closeButton.addEventListener('click', (e) => {

  resultContainer.style.display = 'none';
  mainContainer.style.display = 'flex';
  form.reset();
});


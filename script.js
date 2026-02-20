const amountInput = document.getElementById('loanAmount');
const rateInput = document.getElementById('interestRate');
const yearsInput = document.getElementById('loanYears');
const output = document.getElementById('calculatorOutput');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn?.addEventListener('click', () => {
  const principal = Number(amountInput.value);
  const annualRate = Number(rateInput.value) / 100;
  const years = Number(yearsInput.value);

  if (!principal || !years || annualRate < 0) {
    output.textContent = 'Please enter valid loan details.';
    return;
  }

  const monthlyRate = annualRate / 12;
  const totalPayments = years * 12;
  let monthlyPayment = 0;

  if (monthlyRate === 0) {
    monthlyPayment = principal / totalPayments;
  } else {
    monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  }

  output.textContent = `Monthly Payment: AED ${monthlyPayment.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
});

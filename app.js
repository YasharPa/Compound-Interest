"strict mode";

const startingdeposit = document.querySelector(".deposit-money");
const interestPercentage = document.querySelector(".interest-percentage");
const years = document.querySelector(".invesment-years");
const submitButton = document.querySelector(".submit-btn");
const answer = document.querySelector(".show-answer");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  answer.innerHTML = `Your total amout of money: ${compoundInterest(
    startingdeposit.value,
    interestPercentage.value,
    years.value
  )}`;
});

function compoundInterest(startingdeposit = 0, interestPercentage, years) {
  let calcAmount = startingdeposit * (interestPercentage / 100 + 1) ** years;
  return `${calcAmount.toFixed(2)} ש"ח`;
}

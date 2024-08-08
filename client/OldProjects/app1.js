// "strict mode";

// const startingDeposit = document.querySelector(".deposit-money");
// const interestPercentage = document.querySelector(".interest-percentage");
// const years = document.querySelector(".invesment-years");
// const submitButton = document.querySelector(".submit-btn");
// const answer = document.querySelector(".show-answer");

// // Fcous the first input
// startingDeposit.focus();

// // submit the answers
// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const totalMoney = compoundInterest(
//     startingDeposit.value,
//     interestPercentage.value,
//     years.value
//   );
//   answer.innerHTML = `Your total amout of money: ${totalMoney}`;
// });

// function compoundInterest(startingDeposit = 0, interestPercentage, years) {
//   validateInput(startingDeposit, interestPercentage, years);

//   let calcAmount = startingDeposit * (interestPercentage / 100 + 1) ** years;
//   return `${calcAmount.toFixed(2)} ש"ח`;
// }

// function validateInput(startingDeposit, interestPercentage, years) {
//   if (!isNaN(startingDeposit) && !isNaN(interestPercentage) && !isNaN(years)) {
//     alert(typeof startingDeposit);
//     answer.innerHTML = "Your total amout of money:";
//   }
// }

const button = document.querySelector("button");
const userInput = document.querySelector("input");
const answer = document.querySelector("h2");
const randomNumber = Math.round(Math.random() * 10 + 1);
// console.log(randomNumber);

let count = 0;

button.onclick = () => {
  count++;
  while (userInput.value != randomNumber) {
    answer.textContent = "Opps! Wrong guess :)";
  }
  answer.textContent = `You made correct guesses after ${count} times`;
};

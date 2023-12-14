const counterEl = document.querySelector(".counter");
const decrementButtonEl = document.querySelector(".counter__button--decrease");
const incrementButtonEl = document.querySelector(".counter__button--increase");
const counterValue = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");

//RESET BUTTON
resetButtonEl.addEventListener("click", () => {
  counterValue.textContent = 0;
});

//increment function
const increment = () => {
  //get current value - what is printed on the screen
  const currentValue = counterValue.textContent;

  //convert current value to number
  const currentValueNumber = +currentValue;

  //increment by 1
  let newValue = currentValueNumber + 1;

  //check if newValue is greater than 5
  if (newValue > 5) {
    newValue = 5;
    //give visual indicator that limit has been reached
    counterEl.style.backgroundColor = "yellow";
  }

  //print on the screent
  counterValue.textContent = newValue;
};

// decrement function
const decrement = () => {
  // get current value  - what is printed on the screen
  const currentValue = counterValue.textContent;

  //convert current value to number
  const currentValueNumber = Number(currentValue);

  //decrement by 1
  let newValue = currentValueNumber - 1;

  //check if newValue < 0
  if (newValue < 0) {
    newValue = 0;
  }

  //print on the screen
  counterValue.textContent = newValue;
};

// (+) BUTTON
incrementButtonEl.addEventListener("click", increment);

// (-) BUTTON
decrementButtonEl.addEventListener("click", decrement);

//ANY KEYS PRESS, WILL INCREASE THE COUNTER VALUE
document.addEventListener("keydown", increment);
//keydown => when you press any key
//keup => when you release

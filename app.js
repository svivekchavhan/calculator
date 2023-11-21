const timing = document.querySelector(".time");
let inputText = document.getElementById("inputext");
let message = document.querySelector(".message");

const timeSet = () => {
  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();

  const dateDisplay = `${hours}:${minuts}`;

  timing.textContent = dateDisplay;

  if (hours < 10) {
    timing.textContent = `0${hours} : ${minuts}`;
  }
  if (minuts < 10) {
    timing.textContent = hours + ":" + "0" + minuts;
  }
  if (hours < 10 && minuts < 10) {
    timing.textContent =`0${hours}:0${minuts}`;
  }

};

//called function
timeSet();
// time intervals
let x = setInterval(timeSet, 1000);


// button event with parameters
let claculate = (number) => {
  inputText.value += number;
};

// error catch when invalid input
const Result = () => {
  try {
    inputText.value = eval(inputText.value);
  } catch (error) {
    message.style.visibility = "visible"; //
  }
};

// clered all function
const clr = () => {
  inputText.value = "";
  message.style.visibility = "hidden";
};

// delete last one digit using slice method
const del = () => {
  inputText.value = inputText.value.slice(0, -1);
  message.style.visibility = "hidden";
};



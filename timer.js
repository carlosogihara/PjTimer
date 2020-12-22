const displayHours = document.querySelector('.hours');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
const selectHours = document.querySelector('.setTimerHours');
const selectMinutes = document.querySelector('.setTimerMinutes');
const selectSeconds = document.querySelector('.setTimerSeconds');
const startButton = document.querySelector('.startButton');
const resetButton = document.querySelector('.resetButton');
const runningTimer = 0;

function addNumbersToSelect(maxNumber, selectField) {
  for (let i = 0; i < maxNumber; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectField.appendChild(option);
  }
}

function startTimer() {
  
  displayHours.textContent = selectHours.value;
  displayMinutes.textContent = selectMinutes.value;
  displaySeconds.textContent = selectSeconds.value;

  document.querySelector('.hours').innerHTML =("0" + displayHours.textContent).slice (-2);
  document.querySelector('.minutes').innerHTML =("0" + displayMinutes.textContent).slice (-2);
  document.querySelector('.seconds').innerHTML =("0" + displaySeconds.textContent).slice (-2);

  const runningTimer = setInterval(() => {
    
   displaySeconds.textContent -= 1;
    if (displaySeconds.textContent == -1) {
      displayMinutes.textContent -= 1;
      displaySeconds.textContent = 59;
      if(displayMinutes.textContent == -1) {
        displayHours.textContent -= 1;
        displayMinutes.textContent = 59;
      }
      
    } if (displayHours.textContent == 0 && displayMinutes.textContent == 0 && displaySeconds.textContent == 0) {
      clearInterval(runningTimer);     
    }
    document.querySelector('.hours').innerHTML =("0" + displayHours.textContent).slice (-2);
    document.querySelector('.minutes').innerHTML =("0" + displayMinutes.textContent).slice (-2);
    document.querySelector('.seconds').innerHTML =("0" + displaySeconds.textContent).slice (-2);
    
  }, 1000);


  resetButton.addEventListener('click', function () {
    clearInterval(runningTimer);

  document.querySelector('.hours').innerHTML = "00";
  document.querySelector('.minutes').innerHTML = "00";
  document.querySelector('.seconds').innerHTML = "00";
  selectHours.value = 0;
  selectMinutes.value = 0;
  selectSeconds.value = 0;

  })
}

(function init() {
  addNumbersToSelect(24, selectHours);
  addNumbersToSelect(60, selectMinutes);
  addNumbersToSelect(60, selectSeconds);
  startButton.addEventListener('click', startTimer);
}) ();
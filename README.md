# PjTimer
![](https://img.shields.io/github/repo-size/carlosogihara/PjTimer) ![](https://img.shields.io/github/last-commit/carlosogihara/PjTimer)

PJTimer Web foi desenvolvido por mim, Antonio Ogihara, para fins de estudo e como parte da avaliação do curso “CS50’s Introduction to Computer Science”, ofertado na modalidade à distância pela Universidade de Harvard (EUA). No ensejo, vi a oportunidade de, além de aumentar o meu conhecimento e aplicá-lo em um projeto real, ajudar os usuários a organizarem seu tempo na execução de suas tarefas.
Assim, o objetivo do projeto foi criar um timer simples, com função de realizar contagem regressiva do tempo estabelecido pelo usuário, a ser disponibilizado em um domínio online. A escolha do modelo foi feita pensando em suas possíveis aplicabilidades, principalmente as do cotidiano, das quais se destaca, por exemplo, o uso para cronometrar o tempo de preparo de algum alimento enquanto se utiliza o computador em lugares diferente da casa.
Nesse contexto, a montagem se deu pela linguagem Javascript, nas plataformas HTML e CSS, através do programa Visual Studio Code (Microsoft). Esclareço que estou sempre disposto a receber feedback dos usuários e implementar novos recursos para melhorar a experiência do PJTimer.

###Imagem
![](https://github.com/carlosogihara/PjTimer/blob/master/imagens/Screen%20Shot%202020-12-21%20at%205.21.42%20PM.png?raw=true)


## Navegadores

- [Chrome](https://www.google.com/chrome/) - Version 87.0.4280.88 (64-bit)
- [Edge](https://www.edge.com/) - Version 87.0.664.66 (64-bit)
- [Mozilla](https://www.mozilla.org/en-US/firefox/welcome/4/) 84.0.1 (64-bit)

Obs: Nao funcionou com a nova atualização do Safari para macOS Big Sur.

###HTML Code
-------------
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Timer by Antonio Ogihara</title>
</head>
<body>
  <audio src="Alarm-ringtone.mp3"></audio>
  <main>
    <h1 class="title">Timer</h1>
    <div class="timer">
      <div class="screen">
        <h1>
          <span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span>
        </h1>
      </div>
      <div class="setTimer">
        <select class="setTimerHours">
        </select>
        <select class="setTimerMinutes">
        </select>
        <select class="setTimerSeconds">
        </select>
      </div>
      <div class="buttons">
        <button class="startButton">Start</button>
        <button class="resetButton">Reset</button>
      </div>
    </div>
  </main>
  <script src="./timer.js"></script>
</body>
</html>
© 2020 GitHub, Inc.
```
###CSS
----
```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
}

main {
  background-color: orange;
  height: 32rem;
  width: 32rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.title {
  font-size: 4rem;
  text-transform: uppercase;
}

.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem 0;
}

.screen {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: greenyellow;
  width: 20rem;
  height: 5rem;
  font-size: 2rem;
  border-radius: .5rem;
}

.setTimer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

select {
  width: 5rem;
  height: 3rem;
  font-size: 1.7rem;
  padding-left: .5rem;
  border: none;
  background-color: ;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
}

button {
  border: 0.12rem solid #F8F8FF;
  width: 9rem;
  padding: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: .5rem;
  font-size: 1.7rem;
} 

button:hover {
  background-color: #98FB98;
  border-color: #F8F8FF;
  cursor: pointer;
}

.resetButton:hover {
  background-color: #C0C0C0;
}

@media(min-width: 768px) {
  main {
    width: 50rem;
    height: 50rem;
    gap: 5rem 0;
  }

  .timer {
    gap: 5rem 0;
  }

  .screen {
    width: 25rem;
  }

  select {
    width: 8rem;
    height: 3.5rem;
  }

  .buttons {
    gap: 0 2rem;
  }

  button {
    width: 15rem;
    padding: 1.5rem;
  }
}
```
-----
###JAVASCRIPT
```javascript
const displayHours = document.querySelector('.hours');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
const selectHours = document.querySelector('.setTimerHours');
const selectMinutes = document.querySelector('.setTimerMinutes');
const selectSeconds = document.querySelector('.setTimerSeconds');
const startButton = document.querySelector('.startButton');
const resetButton = document.querySelector('.resetButton');
const audio = document.querySelector('audio')
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
    } if (displayHours.textContent == 0 && displayMinutes.textContent == 0 && displaySeconds.textContent == 0) 
    {audio.play();
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
```
----





###End

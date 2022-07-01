'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = `${message}`;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guessNumber').value);

  if (!guess) {
    displayMessage('❗❗ No Number');
  } else if (guess === randomNumber) {
    displayMessage('🎉🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = 'rgb(114, 253, 101)';
    document.querySelector('.random').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('#highscore').textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('#score').textContent = score;
    } else {
      displayMessage('💥 You lost the game 💥');
      document.querySelector('#score').textContent = 0;
    }
  }
});


document.querySelector('.restart').addEventListener('click', function () {
  document.querySelector('.random').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(172, 224, 224)';
  document.querySelector('#score').textContent = 20;
  document.querySelector('#highscore').textContent = 0;
  document.querySelector('.message').textContent = '🏁 Start Guessing....';
  document.querySelector('.guessNumber').value = '';
});

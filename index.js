var randomNumber1 = document.querySelectorAll('.img1').length;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = 'dice' + randomNumber1 + '.png';

var randomImageSource = 'images/' + randomImage1;

var image_1 = document.querySelectorAll('img')[0];

image_1.setAttribute('src', randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector('h2').innerHTML = '🚩 Play 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h2').innerHTML = 'Player 2 Wins! 🚩';
} else {
  document.querySelector('h2').innerHTML = 'Draw!';
}

const refreshBtn = document.querySelector('button');

refreshBtn.addEventListener('click', () => {
  location.reload();
});

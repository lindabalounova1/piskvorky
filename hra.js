import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    document.querySelector('#player').classList.remove('circle');
    document.querySelector('#player').classList.add('cross');
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
  } else if (currentPlayer === 'cross') {
    currentPlayer = 'circle';
    document.querySelector('#player').classList.remove('cross');
    document.querySelector('#player').classList.add('circle');
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
  }
};

const buttons = document.querySelectorAll('button');
const allButtonsArray = Array.from(buttons).map((button) => {
  if (button.classList.contains('board__field--circle')) {
    return 'o';
  }
  if (button.classList.contains('board__field--cross')) {
    return 'x';
  }

  return '_';
});

const winner = findWinner(allButtonsArray);
if (winner === 'o') {
  setTimeout(() => {
    alert('..and the winner is Mrs.Kolečko!');
    location.reload();
  }, 300);
} else if (winner === 'x') {
  setTimeout(() => {
    alert('..and the winner is Mr.Křížek!');
    location.reload();
  }, 300);
}

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', addClass);
});

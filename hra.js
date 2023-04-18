import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    document.querySelector('#player').classList.remove('circle');
    document.querySelector('#player').classList.add('cross');
    event.target.disabled = true;
    return event.target.classList.add('board__field--circle');
  }

  if (currentPlayer === 'cross') {
    currentPlayer = 'circle';
    document.querySelector('#player').classList.remove('cross');
    document.querySelector('#player').classList.add('circle');
    event.target.disabled = true;
    return event.target.classList.add('board__field--cross');
  }
};




const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', addClass);
});

const winner = findWinner(playField);
if (winner === 'o') {
  setTimeout(() => {
  alert('..and the winner is Mrs.Kolečko!');
  location.reload();
  }, 300);
}
  else (winner === 'x') {
    setTimeout(() => {
alert('..and the winner is Mr.Křížek!');
location.reload();
  }, 300);
}


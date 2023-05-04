import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

//ADD CLASS FOR BUTTONS
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

  //ARRAY
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

  //FETCH
  const fields = document.querySelectorAll('button');
  fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      board: allButtonsArray,
      player: 'x',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (currentPlayer === 'cross') {
        const { x, y } = data.position;
        const field = fields[x + y * 10];
        field.click();
      }
    });

  //WINNER
  const winner = findWinner(allButtonsArray);
  if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!');
      location.reload();
    }, 300);
  } else if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek');
      location.reload();
    }, 300);
  }
};

//USE ADD CLASS FUNCTION FOR ALL BUTTONS
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', addClass);
});

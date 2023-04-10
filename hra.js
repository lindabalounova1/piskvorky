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

document.querySelector('#button1').addEventListener('click', addClass);
document.querySelector('#button2').addEventListener('click', addClass);
document.querySelector('#button3').addEventListener('click', addClass);
document.querySelector('#button4').addEventListener('click', addClass);
document.querySelector('#button5').addEventListener('click', addClass);
document.querySelector('#button6').addEventListener('click', addClass);
document.querySelector('#button7').addEventListener('click', addClass);
document.querySelector('#button8').addEventListener('click', addClass);
document.querySelector('#button9').addEventListener('click', addClass);
document.querySelector('#button10').addEventListener('click', addClass);

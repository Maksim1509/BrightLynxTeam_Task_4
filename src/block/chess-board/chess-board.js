import possibleMoves from './possibleMoves';

const table = document.querySelector('tbody');

table.addEventListener('click', (event) => {
  const previousPossibleMoves = document.querySelectorAll('.bg-color');
  const previousCurrentCell = document.querySelector('.bg-color-blue');
  if (previousCurrentCell) {
    previousCurrentCell.classList.remove('bg-color-blue');
  }
  if (previousPossibleMoves) {
    for (let i = 0; i < previousPossibleMoves.length; i += 1) {
      previousPossibleMoves[i].classList.remove('bg-color');
    }
  }
  const curentCell = event.target;
  if (curentCell.classList.contains('chess-cell-num') || curentCell.tagName === 'TH') {
    return;
  }
  curentCell.classList.add('bg-color-blue');
  possibleMoves(curentCell);
});

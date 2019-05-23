const table = document.querySelector('table');
console.log(table);


table.addEventListener('click', (event) => {
  const lastCell = document.querySelectorAll('.bg-color');
  if (lastCell) {
    for (let i = 0; i < lastCell.length; i += 1) {
      lastCell[i].classList.remove('bg-color');
    }
  }
  const curentCell = event.target;
  const parent = curentCell.parentNode;
  const childs = parent.childNodes;
  console.log(childs);
  let indexOfCerrentCell;
  for (let i = 0; i < childs.length; i += 1) {
    if (childs[i] === curentCell) {
      console.log(i);
      indexOfCerrentCell = i;
    }
  }
  parent.nextSibling.childNodes[indexOfCerrentCell - 2].classList.add('bg-color');

  curentCell.classList.add('bg-color');
});

const possibleMoves = (node) => {
  const parent = node.parentNode;
  const childs = parent.childNodes;
  const proParent = parent.parentNode;
  let indexOfCerrentCell;

  for (let i = 0; i < childs.length; i += 1) {
    if (childs[i] === node) {
      indexOfCerrentCell = i;
    }
  }
  //  1 move
  if (indexOfCerrentCell - 2 > 0
     && proParent.lastChild !== parent.nextSibling) {
    parent.nextSibling.childNodes[indexOfCerrentCell - 2].classList.add('bg-color');
  }
  //  2 move

  if (indexOfCerrentCell + 2 < 9
     && proParent.lastChild !== parent.nextSibling) {
    parent.nextSibling.childNodes[indexOfCerrentCell + 2].classList.add('bg-color');
  }
  //  3 move

  if (indexOfCerrentCell - 2 > 0
     && proParent.firstChild !== parent.previousSibling) {
    parent.previousSibling.childNodes[indexOfCerrentCell - 2].classList.add('bg-color');
  }
  //  4 move

  if (indexOfCerrentCell + 2 < 9
     && proParent.firstChild !== parent.previousSibling) {
    parent.previousSibling.childNodes[indexOfCerrentCell + 2].classList.add('bg-color');
  }
  //  5 move
  if (indexOfCerrentCell - 1 > 0
     && proParent.lastChild !== parent.nextSibling.nextSibling
      && parent.nextSibling.nextSibling !== null) {
    parent.nextSibling.nextSibling.childNodes[indexOfCerrentCell - 1].classList.add('bg-color');
  }
  //  6 move
  if (indexOfCerrentCell + 1 < 9
     && proParent.lastChild !== parent.nextSibling.nextSibling
      && parent.nextSibling.nextSibling !== null) {
    parent.nextSibling.nextSibling.childNodes[indexOfCerrentCell + 1].classList.add('bg-color');
  }
  //  7 move

  if (indexOfCerrentCell - 1 > 0
     && proParent.firstChild !== parent.previousSibling.previousSibling
      && parent.previousSibling.previousSibling !== null) {
    parent.previousSibling.previousSibling.childNodes[indexOfCerrentCell - 1].classList.add('bg-color');
  }
  //  8 move

  if (indexOfCerrentCell + 1 < 9
     && proParent.firstChild !== parent.previousSibling.previousSibling
      && parent.previousSibling.previousSibling !== null) {
    parent.previousSibling.previousSibling.childNodes[indexOfCerrentCell + 1].classList.add('bg-color');
  }
};
export default possibleMoves;

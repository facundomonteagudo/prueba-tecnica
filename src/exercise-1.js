/* Exercise 1
Write a method to receive the row and column (assume the board starts at 1,1) of an infinite chess board and
return a Boolean value indicating whether the color of the cell is black or white. */

/// si uno de los parametros es par y el otro es impar siempre da blanco.

const isWhite = (row, colum) => {
  if ((row % 2 == 0 && colum % 2 !== 0) || (row % 2 !== 0 && colum % 2 == 0)) {
    return true;
  }
  return false;
};

console.log(isWhite(1, 1));

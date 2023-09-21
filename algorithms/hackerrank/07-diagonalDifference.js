function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let index = 0; index < arr.length; index++) {
    leftDiagonal += arr[index][index];
    rightDiagonal += arr[index][arr.length - 1 - index];
  };

  return Math.abs(leftDiagonal - rightDiagonal);
};

let matrix = [
  [1, 2, 3],
  [4, 5 ,6],
  [9, 8, 9]
];

console.log(diagonalDifference(matrix))

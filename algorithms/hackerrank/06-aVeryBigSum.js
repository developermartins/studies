function aVeryBigSum(ar) {
  return ar.reduce((iterator, actualValue) => iterator + actualValue)
};

let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(arr));

// ===================================

// OR

function aVeryBigSum(ar) {
  let bigSum = 0;

  for (let index = 0; index < ar.length; index++) {
    
    bigSum = bigSum + ar[index]
  }

  return bigSum
}

let arr2 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(arr2))
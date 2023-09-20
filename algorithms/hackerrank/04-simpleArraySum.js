function simpleArraySum(ar) {

  return ar.reduce((acumulador, valorInicial) => acumulador + valorInicial, 0);
};

//==========================

// OR

function simpleArraySum(ar) {
  let sum = 0;

  for (let index = 0; index < ar.length; index++) {
    
    sum = sum + ar[index];

  };

  return sum;
};

console.log(simpleArraySum([1, 2, 3]));

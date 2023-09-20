function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let index = 0; index < a.length; index++) {
    if(a[index] > b[index]) {
      aliceScore++
    } else if (a[index] < b[index]) {
      bobScore++
    };
    
  };

  return [aliceScore, bobScore];
};

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

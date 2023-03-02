function findSimpleNumbers(numberOfSimples) {
  let numbersArray = [2];
  round: for (
    let iterable = 3;
    numbersArray.length < numberOfSimples;
    iterable++
  ) {
    for (let j = 2; j < iterable; j++) {
      if (j <= Math.sqrt(iterable) && iterable % j === 0) {
        continue round;
      }
    }
    numbersArray.push(iterable);
  }
  return;
}

console.time("findSimpleNumbers");
console.log(findSimpleNumbers(process.argv[2]));
console.timeEnd("findSimpleNumbers");

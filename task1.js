function findSimpleNumbers(numberOfSimples) {
  let simpleNumbersArray = [];
  if (numberOfSimples <= 0) {
  } else if (numberOfSimples > 0) {
    simpleNumbersArray.push(2);
    round: for (
      let number = 3;
      simpleNumbersArray.length < numberOfSimples;
      number++
    ) {
      for (let item of simpleNumbersArray) {
        if (item > Math.sqrt(number)) {
          simpleNumbersArray.push(number);
          continue round;
        } else if (number % item === 0) {
          continue round;
        }
      }
      simpleNumbersArray.push(number);
    }
  }
  return simpleNumbersArray;
}

console.time("findSimpleNumbers");
console.log(findSimpleNumbers(process.argv[2]));
console.timeEnd("findSimpleNumbers");

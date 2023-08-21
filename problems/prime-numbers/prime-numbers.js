// https://ru.wikipedia.org/wiki/Решето_Эратосфена

export function primeNumbers(num) {
  const a = 1;
  const result = [];
  for (let i = 2; i <= num; i++) {
    if (isNumberPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

function isNumberPrime(num) {
  const sqrtOfNum = Math.sqrt(num);
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.ceil(sqrtOfNum); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNumbers(2));
console.log(primeNumbers(4));
console.log(primeNumbers(20));
console.log(primeNumbers(156));

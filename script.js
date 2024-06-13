//182. Write a JavaScript program to join all elements of an array into a string and return this string. Use a separator and an end separator.
const arr1 = ["a", "b", "c", "d", "e"];
function join(string) {
  let result = " ";
  for (let i = 0; i < arr1.length; i++) {
    let result1 = result + string[i];
    return result1;
  }
}
const banana = join(arr1);
console.log(banana);

//186. Write a JavaScript program to check if the given argument is a symbol.
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function isSymbol(a) {
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (a === alphabet[i] || a === numbers[j]) {
        return true;
      }
    }
  }
}
let banana2 = isSymbol("b");
console.log(banana2);

//191. Write a JavaScript program to check if the provided integer is a prime number or is not.
function isPrime(a) {
    if (a%2 ===  0) {
        return "prime"
    } else {
        return "not a prime"
    }
}
const banana3 = isPrime(12);
console.log(banana3);

//196. Write a JavaScript program that will return true if the specified value is null, false otherwise.
function isNull(a) {
    if (a === null) {
        return true;
    } else {
        return false;
    }
}
const banana4 = isNull(null);
console.log(banana4);

//197. Write a JavaScript program to check if a string is lower case or not.
function isLowerCase(a) {
    for (let i = 0; i < alphabet.length; i++) {
    if (a === alphabet[i]) {
        return true;
    } else {
        return false;
    }
}
}
const banana5 = isLowerCase("a");
console.log(banana5);
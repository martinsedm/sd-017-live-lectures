let num1 = 5;
let num2 = 10;
let num3 = 15;

if (num1 > num2) {
  console.log("num1 wins");
} else {
  console.log("num2 wins")
}

// Como saber se o num1 + num 2 é par?
let isEven = ((num1 + num2) % 2) == 0
console.log(isEven);

// E o num1 + num2 + num3?
isEven = ((num1 + num2 + num3) % 2) == 0
console.log(isEven);

// 1 é igual a "1"
console.log(1 == "1");
console.log(1 === "1");
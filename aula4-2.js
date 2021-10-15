let n1 = Math.ceil(Math.random() * 60);
let n2 = Math.ceil(Math.random() * 60);
let n3 = Math.ceil(Math.random() * 60);
let n4 = Math.ceil(Math.random() * 60);
let n5 = Math.ceil(Math.random() * 60);
let n6 = Math.ceil(Math.random() * 60);

let megaSenaNumbers = [n1, n2, n3, n4, n5, n6];

let myNumbers = [10, 22, 09, 08, 07, 02];

let acertou = false;

for (let i = 0; i < megaSenaNumbers.length; i++) {
  for (let n = 0; n < myNumbers.length; n++) {
    if (megaSenaNumbers[i] === myNumbers[n]) {
      acertou = true;
      console.log('acertou!: ', myNumbers[n]);
    }
  }
}

console.log('megaSenaNumbers: ', megaSenaNumbers);
console.log('myNumbers: ', myNumbers);

if (!acertou) {
  console.log('não acertou: ');
}

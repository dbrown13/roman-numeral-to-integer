function romanNumeral(string) {
  // type your code here
  const romans = {
    I: 1,
    IV: 4, 
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let total = 0;
  let index = 0;

  while (index < string.length) {
    const twoCharacters = string[index] + (string[index + 1] || '');

    if (romans[twoCharacters] !== undefined) {
      total += romans[twoCharacters];
      index += 2;
    } else {
      total += romans[string[index]];
      ++index;
    }
  }
  return total;
}
  //   if (string == 'I') {
//     return 1;
//   } else if (string == 'V') {
//     return 5;
//   } else if (string == 'X') {
//     return 10;
//   } else if (string == 'L') {
//     return 50;
//   } else if (string == 'C') {
//     return 100;
//   } else if (string == 'D') {
//     return 500;
//   } else if (string == 'M') {
//     return 1000;
//   } else {
//     return -1
//   }
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

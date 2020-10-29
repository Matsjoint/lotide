const assertEqual = function(actual, expected) {
  const good = String.fromCodePoint(0x2705);
  const noGood = String.fromCodePoint(0xd83d, 0xded1);
  if (actual === expected) {
    console.log(good + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(noGood + ` Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// const letters = function (sentence) {
//   // declare an object to return to store count of each letter/character 
//   const count = {}; 
//   const removeSpace = sentence.split('')
//   // loop through array 
//   for (const letter in sent) {
//     // if new letter, add as key to count
//     if () {

//     }
//     // if letter matches key, add 1 to count 

//   }
//   // output object with each iterated letter as a key; a
//   // and have the value equal the total number of times that letter was looped
//   return count; 
// }



// Stack OverFlow: https://stackoverflow.com/questions/35810226/count-letters-in-a-text-and-produce-an-object-with-results

// const letters = function (sentence) {
//   const count = {};

  // split sentence and call function on each element
//   sentence.split(' ').forEach(function(e) {
//     count[e] = {};
//     e.split('').forEach(function(c) {
//         if(!count[e][c]) { count[e][c]=0; }
//         count[e][c]++;
//     });
// });

// return count;
// }


const letters = function (sentence){
  const freq = {};
  
  for (let i=0; i<sentence.length;i++) {
      const character = sentence.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }

  return freq;
};

console.log(letters("There was once a dog"));
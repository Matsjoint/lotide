const assertEqual = function(actual, expected) {
  const good = String.fromCodePoint(0x2705);
  const noGood = String.fromCodePoint(0xd83d, 0xded1);
  if (actual === expected) {
    console.log(good + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(noGood + ` Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const letters = function(sentence){
  var count = {};
  sentence.split('').filter(function(s) {
    return s.match(/[a-z]/i); // get rid of anything not a letter
  }).forEach(function(s) {
    s = s.toLowerCase(); // convert to lowercase
    count[s] = count[s] ? count[s]+1 : 1; // add to count for that letter
  });
  return count;
 }
 

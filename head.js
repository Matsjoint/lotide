
const assertEqual = function(actual, expected) {
  const good = String.fromCodePoint(0x2705);
  const noGood = String.fromCodePoint(0xd83d, 0xded1);
  if (actual === expected) {
    console.log(good + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(noGood + ` Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const head = function (data) {
  return data[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
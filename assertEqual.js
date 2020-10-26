// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  const good = String.fromCodePoint(0x2705);
  const noGood = String.fromCodePoint(0xd83d, 0xded1);
  if (actual === expected) {
    console.log(good + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(noGood + ` Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

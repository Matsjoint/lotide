const assertEqual = function(actual, expected) {
  const good = String.fromCodePoint(0x2705);
  const noGood = String.fromCodePoint(0xd83d, 0xded1);
  if (actual === expected) {
    console.log(good + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(noGood + ` Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  const results = {}
  
  for (const item of allItems) {
    // console.log
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    console.log(item);
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
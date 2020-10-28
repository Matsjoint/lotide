const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const match = String.fromCodePoint(0x2705);
  const noMatch = String.fromCodePoint(0xd83d, 0xded1);
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log(noMatch + ` Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(match + ` Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const middle = function(arr) {
  let midElm = [];
  if (arr.length % 2 === 0) {
    let evenIndexOne = Math.floor((arr.length - 1) / 2);
    midElm.push(arr[evenIndexOne]);
    midElm.push(arr[evenIndexOne + 1]);
    
  } else {
    let oddIndexMiddle = arr[Math.round((arr.length - 1) / 2)];
    midElm.push(oddIndexMiddle);
  }
  console.log(midElm);
  return midElm;
};
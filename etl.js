export const transform = (input) => {
  let result = {};
  for (let num in input) {
    for (let letter of input[num]) {
      result[letter.toLowerCase()] = +num;
    }
  }
  return result;
};

function getZigZagArray(str, numberOfLines) {
  let arr = [];
  for(let i = 0; i < numberOfLines; i++) {
    arr.push([]);
  }
  let j = 0;
  let direction = 1;
  for(let i = 0; i < str.length; i++) {
    arr[j].push(str[i]);
    if (j === 0) {
      direction = 1; 
    } else if (j === numberOfLines - 1) {
      direction = -1; 
    }
    j += direction;
  } 
  return arr;
};
export const encode = (str, numberOfLines) => {
let newArr = getZigZagArray(str, numberOfLines);
  let result = '';
  for(let i = 0; i < newArr.length; i++) {
    for(let j = 0; j < newArr[i].length; j++) {
      result += newArr[i][j];
    }
  }
  return result;
};
export const decode = (str, numberOfLines) => {
  let newArr = getZigZagArray(str, numberOfLines);
  let c = 0;
  for(let i = 0; i < newArr.length; i++) {
    for(let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = str[c];
      c += 1;
    }
  } 
  let result = '';
  let i = 0;
  let direction = 1;
  while(newArr[i].length !== 0){
    result += newArr[i][0];
    newArr[i].shift();
    if (i === 0) {
      direction = 1; 
    } else if (i === numberOfLines - 1) {
      direction = -1; 
      }
      i += direction;
    }
  return result;
};

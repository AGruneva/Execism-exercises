export const encode = (str) => {
  let result = '';
  let repetitions = 1;
  for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i+1]) {
      repetitions += 1;
    }  else {
        if(repetitions == 1) {
        result = result + str[i];
        } else {
          result = result + repetitions + str[i];
          repetitions = 1;
          }
       }
  } 
  return result;
};

export const decode = (str) => {
  let result = '';
  let num = '';
  for(let i = 0; i < str.length; i++) {
    if(Number(str[i])) {
      num += str[i];
    } else {
      +num;
      if(num == 0) {
        result += str[i];
      }
      while(num > 0) {
        result += str[i];
        num -= 1;
      }
      num = '';
    }
  }
  return result;
};

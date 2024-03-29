export const toRoman = (n) => {
  let arr = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  let result = '';
  let i = 0;
  while(n > 0) {
      if(n >= arr[i][0]) {
        n -= arr[i][0];
        result += arr[i][1];
      } else {
        i += 1;
      }
  }
  return result;
};

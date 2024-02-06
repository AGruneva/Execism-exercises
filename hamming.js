export const compute = (str1, str2) => {
  let distance = 0;
  if(str1.length !== str2.length) {
    throw new Error('strands must be of equal length');
  }
  for(let i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[i]) {
        distance += 1;
      }
  }
  return distance;
};

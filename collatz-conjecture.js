export const steps = (n) => {
  if(n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  let countSteps = 0;
  while(n !== 1) {
    if(n % 2 == 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    countSteps++;
  }
  return countSteps;
};

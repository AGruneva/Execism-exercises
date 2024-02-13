export const isArmstrongNumber = (num) => {
  let result = 0;
  const originalNum = num;
  while(num) {
    result += (num % 10) ** (Math.ceil(Math.log(originalNum) / Math.log(10)));
    num = Math.floor(num / 10);
  }
  return originalNum === result;
};

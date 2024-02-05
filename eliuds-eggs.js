export const eggCount = (displayValue) => {
  let binary = convertToBinary(displayValue);
  let eggs = 0;
  for(let i = 0; i < binary.length; i++) {
    if(binary[i] == 1) {
      eggs += 1;
    }
  }
  return eggs;
};
function convertToBinary(displayValue) {
  let binary = '';
  while(displayValue > 0) {
    let remainder = displayValue % 2;
    binary = remainder + binary; 
    displayValue = Math.floor(displayValue / 2); 
  }
  return binary;
}

export const isPangram = (input) => {
  const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  input = input.toLowerCase();
  let inputArr = input.split('');
  for(let i = 0; i < alphabetArr.length; i++){
    if(inputArr.includes(alphabetArr[i])) {
      continue;
    } else if(!(inputArr.includes(alphabetArr[i]))) {
      return false;
    }
  }
  return true;
};

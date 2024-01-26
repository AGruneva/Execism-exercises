export const rows = (numberOfRows) => {
  if(numberOfRows === 0) {
    return [];
  }
  let result = [[1]];
    for(let i = 1; i < numberOfRows; i++){
      let row = [1];
      for(let j = 1; j < i; j++) {
         row[j] = result[i-1][j-1] + result[i-1][j];
      }
      row.push(1);
      result.push(row);
    }
  return result;
};

export class Matrix {
  constructor(str) {
    this.matrixArr = this.getStrToMatrixArr(str);
  }
  
  getStrToMatrixArr(str) {
    let rowsArr = str.split('\n');
    let matrixArr = [];
    for(let i = 0; i < rowsArr.length; i++) {
      let row = rowsArr[i].split(' ').map(Number);
      matrixArr.push(row);
    }
    return matrixArr;
  }
  
  get rows() {
    return this.matrixArr;
  }
  
  get columns() {
    let columnsArr = [];
    for(let i = 0; i < this.matrixArr[0].length; i++) {
      let column = [];
      for(let j = 0; j < this.matrixArr.length; j++) {
        column.push(this.matrixArr[j][i]);
      }
      columnsArr.push(column);
    }
    return columnsArr;
  }
}

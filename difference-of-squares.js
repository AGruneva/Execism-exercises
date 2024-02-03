export class Squares {
  constructor(num) {
    this.num = num;
  }
  get sumOfSquares() {
    let numToSquare = 1;
    let result = 0;
    let remainingNum = this.num;
    while (remainingNum > 0) {
      result += numToSquare ** 2;
      numToSquare += 1;
      remainingNum -= 1;
    }
    return result;
  }
  get squareOfSum() {
    let sum = 0;
    let remainingNum = this.num;
    while (remainingNum > 0) {
      sum += remainingNum;
      remainingNum -= 1;
    }
    return sum ** 2;
  }
  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

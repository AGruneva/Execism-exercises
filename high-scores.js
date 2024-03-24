export class HighScores {
  constructor(arr) {
    this.arr = arr;
  }
  get scores() {
   return this.arr; 
  }
  get latest() {
    return this.arr[this.arr.length - 1];
  }
  get personalBest() {
    return this.arr.reduce((a, b) => a > b ? a : b , 0);
  }
  get personalTopThree() {
    return this.arr.sort((a, b) => b - a).slice(0, 3);
  }
}

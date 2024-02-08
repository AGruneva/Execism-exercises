export const score = (x, y) => {
  let radius = Math.sqrt(x ** 2 + y ** 2);
  let scoresForCircle = [[1, 10], [5, 5], [10, 1]];
  for(let i = 0; i < scoresForCircle.length; i++){
    if(radius <= scoresForCircle[i][0]){
      return scoresForCircle[i][1];
    }
  }
  return 0;
}

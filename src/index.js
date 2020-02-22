module.exports = function towelSort(matrix) {
  res = [];
  if (matrix === undefined || matrix.length == 0) {
    return res;
  }

  for (let i = 0; i < matrix.length; i++) {
    let towel = matrix[i];
    if (i % 2 == 0) {
      for (let element of towel) {
        res.push(element);
      }
    }
    else {
      for (let x = towel.length - 1; x > -1; x--) {
        res.push(towel[x]);
      }
    }
  }


  return res;
}

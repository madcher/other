//разложить матрицу по спирали


var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
var matrix3 = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, 32, 33, 34, 35], [36, 37, 38, 39, 40, 41, 42], [43, 44, 45, 46, 47, 48, 49]];

function spiral(mat) {
  var m = (mat.length - 1)/2;//centr
  var i = m, j = m, sign = 1, result = [];

   result.push(mat[i][j]); //start
   j-= 1;
   result.push(mat[i][j]);
   i+= 1;
   result.push(mat[i][j]);

   for (var k = 2; k <= mat.length; k++){
      for (var l = 1; l <= k; l++){
          j = j+sign;
          if (j<0) {return result;}
          result.push(mat[i][j]);
      }
       sign*= -1;
      for (var m = 1; m <= k; m++){
        i = i+sign;//5
        result.push(mat[i][j]);
      }
    }
}

spiral(matrix);
spiral(matrix2);
spiral(matrix3);

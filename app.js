console.log('tic tac toe');


/* 
1. Player X starts
2. Click on square, change square contents to X 
4. Click on another square, change contents to O
5. If 3 Xs horizontally, diagonally or vertically, X wins. Alternatively, 3 O's.
6. If all squares filled, it's a tie
*/

var gameBoard = [null,null,null,null,null,null,null,null,null];
  

//dt revision stuff
// var board = "x x x x x o o o".split(' ');

// for (var i =0; i<board.length; i++) {
//   var box = document.createElement('div');
//   box.innerHTML = board[i];
// }

// document.querySelector('.board').appendChild(box);




var addX = function(space) {
  gameBoard[space] = 'x';
} 

var addO = function(space) {
  gameBoard[space] = 'o';
}





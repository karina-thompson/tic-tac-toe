
/* 
1. Player X starts
2. Click on square, change square contents to X 
4. Click on another square, change contents to O
5. If 3 Xs horizontally, diagonally or vertically, X wins. Alternatively, 3 O's.
6. If all squares filled, it's a tie ---or should I count Xs and Os??
7.Reset button
*/


//dt revision stuff
// var board = "x x x x x o o o".split(' ');

// for (var i =0; i<board.length; i++) {
//   var box = document.createElement('div');
//   box.innerHTML = board[i];
// }

// document.querySelector('.board').appendChild(box);

var board = [null,null,null,null,null,null,null,null,null];

var counter = 0;

var winner = document.querySelector('#winner');

var whoseTurn = function() {
  counter = counter + 1;
  if (counter%2 === 0) {
    return 'X';
  }
  else {
    return 'O';
  }
}


var resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', function() {
  for (var i =0;i<gameBoard.children.length;i++) {
    gameBoard.children[i].innerHTML = null;
    board[i] = null;
  }
  winner.innerHTML = '';
})

 

var checkWinner = function(player) {
  if (board[0] === player && board[1] === player && board[2] === player) {
   return true;
  }
  else if (board[3] === player && board[4] === player && board[5] === player) {
    return true;
  }
  else if (board[6] === player && board[7] === player && board[8] === player) {
    return true;
  }
  else if (board[0] === player && board[3] === player && board[6] === player) {
    return true; 
  }
  else if (board[1] === player && board[4] === player && board[7] === player) {
    return true;
  }
  else if (board[2] === player && board[5] === player && board[8] === player) {
    return true;
  }
  else if (board[0] === player && board[4] === player && board[8] === player) {
    return true;
  }
  else if (board[2] === player && board[4] === player && board[6] === player) {
    return true;
  }
  else if (board.indexOf(null) === -1) {
    return "tie";
  }
  else {
    return false;
  }
}



var gameBoard = document.querySelector('#board');

gameBoard.addEventListener('click', function(event) {
  if (event.target.innerHTML === '') {
    var player = whoseTurn();
    event.target.innerHTML = player;
  }
  if (board[event.target.id] === null) {
    board[event.target.id] = player;
  }
  if (checkWinner(player) === true) {
    winner.innerHTML = player + " wins!";
  }
  if (checkWinner(player) === "tie") {
    winner.innerHTML = "It's a tie!";
  }
})








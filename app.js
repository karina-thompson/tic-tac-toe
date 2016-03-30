var pretzel = '<img src=pretzel.png>';
var donut = '<img src=donut.png>';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#turn').innerHTML = pretzel + "'s turn";
})

var ticTacToe = {
  turnCount: 1,
  player: function() {
    ticTacToe.turnCount = ticTacToe.turnCount + 1;
    if (ticTacToe.turnCount%2 === 0) {
      return 'X';
    }
    else {
      return 'O';
    }
  }
}

var board = [null,null,null,null,null,null,null,null,null];


var checkWinner = function(player) {
  for (var i = 0;i<=8;i+=3) { 
    if (board[i] === player && board[i+1] === player && board[i+2] === player) {
    return true;
    }
  }
  for (var j = 0;j<=2;j++) {
    if (board[j] === player && board[j+3] === player && board[j+6] === player) {
      return true;
    }
  }
  if (board[0] === player && board[4] === player && board[8] === player) {
      return true;
    }
  if (board[2] === player && board[4] === player && board[6] === player) {
      return true;
    }
  if (board.indexOf(null) === -1) {
    return "tie";
  }
  return false;
}

 


var gameBoard = document.querySelector('#board');
var turn = document.querySelector('#turn');


gameBoard.addEventListener('click', function(event) {
  var winner = document.querySelector('#winner');
  if (event.target.className === '') { //Is it a valid move?
    var player = ticTacToe.player();
    if (player === 'O') {
      event.target.className = 'donut';
      turn.innerHTML = (pretzel + "'s turn");
    }
    else {
       event.target.className = 'pretzel';
       turn.innerHTML = (donut +"'s turn"); 
    }
  }
  if (board[event.target.id] === null) {
    board[event.target.id] = player;
  }
  if (checkWinner(player) === true) {
    if (player === 'O') {
      return winner.innerHTML = donut + " wins!";
    } else {
      return winner.innerHTML = pretzel + " wins!";
    } 
  }
  if (checkWinner(player) === "tie") {
    winner.innerHTML = "It's a tie!";
  }
})



document.querySelector('#reset').addEventListener('click', function() {
  for (var i =0;i<gameBoard.children.length;i++) {
    gameBoard.children[i].className = '';
    board[i] = null;
  }
  winner.innerHTML = '';
  ticTacToe.turnCount = 1;
  turn.innerHTML = pretzel + "'s turn";
})



//Add a win count  and increment with each win
//stop being able to click when someone has won? remove function outside of eventListener and use removeEventListener?



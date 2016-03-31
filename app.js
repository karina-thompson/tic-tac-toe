
//defining variables and the player function to switch turns
var ticTacToe = {
  pretzel: '<img src="pretzel.png">',
  donut: '<img src="donut.png">',
  board: [null,null,null,null,null,null,null,null,null],
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


var gameBoard = document.querySelector('#board');
var info = document.querySelector('#info');


var checkWinner = function(player) {
  //horizontal line wins
  for (var i = 0;i<=8;i+=3) { 
    if (ticTacToe.board[i] === player && ticTacToe.board[i+1] === player && ticTacToe.board[i+2] === player) {
    return true;
    }
  }
  //vertical line wins
  for (var j = 0;j<=2;j++) {
    if (ticTacToe.board[j] === player && ticTacToe.board[j+3] === player && ticTacToe.board[j+6] === player) {
      return true;
    }
  }
  //diagonal line wins
  if (ticTacToe.board[0] === player && ticTacToe.board[4] === player && ticTacToe.board[8] === player) {
      return true;
    }
  if (ticTacToe.board[2] === player && ticTacToe.board[4] === player && ticTacToe.board[6] === player) {
      return true;
    }
  //call it a tie when all squares on the board filled
  if ((ticTacToe.board).indexOf(null) === -1) {
    return "tie";
  }
  return false;
}

var makeMove = function(event) {
   if (event.target.className === '') {  //Is it a valid move?
    var player = ticTacToe.player();
    if (player === 'O') {
      event.target.className = 'donut';
      info.innerHTML = (ticTacToe.pretzel + "'s turn");
    }
    else {
       event.target.className = 'pretzel';
       info.innerHTML = (ticTacToe.donut +"'s turn"); 
    }
  }
  if (ticTacToe.board[event.target.id] === null) {
    ticTacToe.board[event.target.id] = player;
  }
  if (checkWinner(player) === true) {
    gameBoard.removeEventListener('click', makeMove);    //stop being able to play further after a win
    if (player === 'O') {
      info.innerHTML = ticTacToe.donut + " WINS!";
      return "O";
    } else {
      info.innerHTML = ticTacToe.pretzel + " WINS!";
      return "X";
    } 
  }
  if (checkWinner(player) === "tie") {
    info.innerHTML = ticTacToe.pretzel + " IT'S A TIE! " + ticTacToe.donut;
      return "tie";
  }
}

var resetBoard = function() {
  for (var i =0;i<gameBoard.children.length;i++) {
    gameBoard.children[i].className = '';
    ticTacToe.board[i] = null;
  }
  ticTacToe.turnCount = 1;
  gameBoard.addEventListener('click',makeMove);
  //randomize who plays first
  if (Math.random() <= 0.5) {
  info.innerHTML = ticTacToe.donut + " plays first";
  } else {
    info.innerHTML = ticTacToe.pretzel + " plays first";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  info.innerHTML = ticTacToe.pretzel + " plays first";            //initial turn for pretzel set
  gameBoard.addEventListener('click',makeMove);                       //event listener starts for clicks on board
  document.querySelector('#resetBtn').addEventListener('click', resetBoard);      //reset board button
})









//Add a win count  and increment with each win
//local storage??
//readme file


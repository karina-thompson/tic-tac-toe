
//defining variables and the player function to switch turns
var ticTacToe = {
  pretzel: '<img src="pretzel.png">',
  donut: '<img src="donut.png">',
  board: [null,null,null,null,null,null,null,null,null],
  turnCount: 1,
  xWins: 0,
  oWins: 0,
  ties: 0,
  player: function() {        //switches between players for turns
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
var xWinDisplay = document.querySelector('#xWins');
var oWinDisplay = document.querySelector('#oWins');
var tieDisplay = document.querySelector('#ties');


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
      ticTacToe.oWins = ticTacToe.oWins + 1;
      document.querySelector('#oWins').innerHTML = "Donut Wins: " + ticTacToe.oWins;
      return;
    } else {
      info.innerHTML = ticTacToe.pretzel + " WINS!";
      ticTacToe.xWins = ticTacToe.xWins + 1;  
      document.querySelector('#xWins').innerHTML = "Pretzel Wins: " + ticTacToe.xWins;
      return;
    } 
  }
  if (checkWinner(player) === 'tie') {
    info.innerHTML = ticTacToe.pretzel + " IT'S A TIE! " + ticTacToe.donut;
    ticTacToe.ties = ticTacToe.ties +1;
    document.querySelector('#ties').innerHTML = "Ties: " + ticTacToe.ties;
  }
}


var resetBoard = function() {
  for (var i =0;i<gameBoard.children.length;i++) {
    gameBoard.children[i].className = '';
    ticTacToe.board[i] = null;
  }
  ticTacToe.turnCount = 1;
  gameBoard.addEventListener('click',makeMove);     //Turn event listener on again
  //Randomize who plays first
  if (Math.random() <= 0.5) {
  info.innerHTML = ticTacToe.donut + " plays first";
  ticTacToe.turnCount = ticTacToe.turnCount + 1;    //Switches so donut plays first
  } else {
    info.innerHTML = ticTacToe.pretzel + " plays first";
  }
}

var resetWinCounter = function() {
  ticTacToe.xWins = 0;
  ticTacToe.oWins = 0;
  ticTacToe.ties = 0;
  xWinDisplay.innerHTML = "Pretzel has Won: " + ticTacToe.xWins;
  oWinDisplay.innerHTML = "Donut has Won: " + ticTacToe.oWins;
  tieDisplay.innerHTML = "Ties: " + ticTacToe.ties;  
}



document.addEventListener('DOMContentLoaded', function() {
  info.innerHTML = ticTacToe.pretzel + " plays first";            //initial turn for pretzel set
  //Initial zero win counters
  xWinDisplay.innerHTML = "Pretzel Wins: " + ticTacToe.xWins;
  oWinDisplay.innerHTML = "Donut Wins: " + ticTacToe.oWins;
  tieDisplay.innerHTML = "Ties: " + ticTacToe.ties;  
  //event listeners for board clicks and reset buttons
  gameBoard.addEventListener('click',makeMove);              
  document.querySelector('#resetBoard').addEventListener('click', resetBoard);
  document.querySelector('#resetCounters').addEventListener('click',resetWinCounter);   
})





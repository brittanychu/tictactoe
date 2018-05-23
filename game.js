const allGames = [];

function Game() {
  this.id = allGames.length + 1;
  this.board = ["", "", "", "", "", "", "", "", ""];
  this.winner = "";
  this.turn = "X";
}

Game.prototype.getStatus = function() {
  return this.board;
};

Game.prototype.postMove = function(cell) {
  if (!this.board[cell]) {
    this.board[cell] = this.turn;
    this.turn = this.turn === "X" ? "O" : "X";
    return true;
  }
  return false;
};

Game.prototype.isGameOver = function() {
  if (this.board[0] === this.board[1] && this.board[0] === this.board[2]) {
    this.winner = this.board[0];
  } else if (
    this.board[3] === this.board[4] &&
    this.board[3] === this.board[5]
  ) {
    this.winner = this.board[3];
  } else if (
    this.board[6] === this.board[7] &&
    this.board[6] === this.board[8]
  ) {
    this.winner = this.board[6];
  } else if (
    this.board[0] === this.board[3] &&
    this.board[0] === this.board[6]
  ) {
    this.winner = this.board[0];
  } else if (
    this.board[1] === this.board[4] &&
    this.board[1] === this.board[7]
  ) {
    this.winner = this.board[1];
  } else if (
    this.board[2] === this.board[5] &&
    this.board[2] === this.board[8]
  ) {
    this.winner = this.board[2];
  } else if (
    this.board[0] === this.board[4] &&
    this.board[0] === this.board[8]
  ) {
    this.winner = this.board[0];
  } else if (
    this.board[2] === this.board[4] &&
    this.board[2] === this.board[6]
  ) {
    this.winner = this.board[2];
  }
};

function newGame() {
  let game = new Game();
  allGames.push(game.id);
  return game;
}

module.exports = { newGame };

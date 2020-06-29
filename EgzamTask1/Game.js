const { board } = require("./EgzamInput.js");

module.exports = class Game {
  constructor(board, ball) {
    this.board = board;
    this.ball = ball;
    this.initialBallPosition = {
      x: this.ball.position.x,
      y: this.ball.position.y,
    };
    this.wallHits = 0;
    this.movesCounter = 0;
  }

  addMoves() {
    this.movesCounter++;
  }

  addWallHit() {
    this.wallHits++;
  }

  play() {
    do {
      const isNearLeftWall =
        board[this.ball.position.x][this.ball.position.y - 1] === "X";
      const isNearRighttWall =
        board[this.ball.position.x][this.ball.position.y + 1] === "X";
      const isNearTopWall =
        board[this.ball.position.x - 1][this.ball.position.y] === "X";
      const isNearBottomWall =
        board[this.ball.position.x + 1][this.ball.position.y] === "X";

      const isMovingLeft = this.ball.vector.y === -1;
      const isMovingRight = this.ball.vector.y === 1;
      const isMovingTop = this.ball.vector.x === -1;
      const isMovingBottom = this.ball.vector.x === 1;

      const willHitLeftWall = isNearLeftWall && isMovingLeft;
      const willHitRightWall = isNearRighttWall && isMovingRight;
      const willHitTopWall = isNearTopWall && isMovingTop;
      const willHitBottomWall = isNearBottomWall && isMovingBottom;

      if (willHitLeftWall || willHitRightWall) {
        this.addWallHit();
        this.ball.vector.flipHorizontal();
      }

      if (willHitTopWall || willHitBottomWall) {
        this.addWallHit();
        this.ball.vector.flipVertical();
      }

      this.ball.move();
      this.addMoves();
      console.log(this.ball.position);
    } while (
      this.ball.position.x !== this.initialBallPosition.x ||
      this.ball.position.y !== this.initialBallPosition.y
    );
    console.log("TOTAL NUMBER OF HITS:", this.wallHits);
    console.log("TOTAL NUMBER OF MOVES:", this.movesCounter);
  }
};

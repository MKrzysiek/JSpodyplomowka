"use strict";

const { board } = require("./EgzamInput.js");

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Vector {
  constructor(x = 1, y = 1) {
    this.x = x;
    this.y = x;
  }

  flipHorizontal() {
    this.y = -this.y;
  }

  flipVertical() {
    this.x = -this.x;
  }
}

class Ball {
  constructor(position, vector) {
    this.position = position;
    this.vector = vector;
  }

  move() {
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
  }
}

class Game {
  constructor(board, ball) {
    this.board = board;
    this.ball = ball;
    this.initialBallPosition = {
      x: this.ball.position.x,
      y: this.ball.position.y,
    };
    this.wallHits = 0;
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
      //   console.log(board);
    } while (
      this.ball.position.x !== this.initialBallPosition.x ||
      this.ball.position.y !== this.initialBallPosition.y
    );
    console.log("TOTAL NUMBER OF HITS:", this.wallHits);
  }
}

const initialBallPosition = new Position(1, 1);
const initialBallVector = new Vector(1, 1);

const ball = new Ball(initialBallPosition, initialBallVector);

const game = new Game(board, ball);

game.play();

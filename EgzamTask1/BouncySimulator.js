"use strict";
const { board } = require("./EgzamInput.js");
const Position = require("./Position");
const Vector = require("./Vector");
const Ball = require("./Ball");
const Game = require("./Game");

const initialBallPosition = new Position(1, 1);
const initialBallVector = new Vector(1, 1);

const ball = new Ball(initialBallPosition, initialBallVector);
const game = new Game(board, ball);

game.play();

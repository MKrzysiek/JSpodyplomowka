"use strict";

module.exports = class Vector {
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
};

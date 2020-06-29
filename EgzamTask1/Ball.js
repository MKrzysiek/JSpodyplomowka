module.exports = class Ball {
  constructor(position, vector) {
    this.position = position;
    this.vector = vector;
  }

  move() {
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
  }
};

class Block {
  constructor(x, y, colorIndex) {
    this.x = x;
    this.y = y;
    this.color = Block.COLOR_TYPES[colorIndex];
  }

  static get COLOR_TYPES() {
    return ['', 'red', 'yellow', 'blue', 'green', 'purple'];
  }

  static get SIZE() {
    return 30;
  }

  draw() {
    window.con.fillStyle = this.color;
    window.con.fillRect(this.x * Block.SIZE, this.y * Block.SIZE, Block.SIZE, Block.SIZE);
    window.con.strokeStyle = 'black';
    window.con.strokeRect(this.x * Block.SIZE, this.y * Block.SIZE, Block.SIZE, Block.SIZE);
  }
}

export default Block;
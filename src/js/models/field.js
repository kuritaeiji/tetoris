import Block from './block';

class Field {
  constructor() {
    this.data = [];
    for(let y = 0; y < Field.ROWS; y++) {
      this.data[y] = [];
      for(let x = 0; x < Field.COLS; x++) {
        this.data[y][x] = 0;
      }
    }
  }

  static get ROWS() {
    return 20;
  }

  static get COLS() {
    return 10;
  }

  draw() {
    this.data.forEach((arrayFieldX, y) => {
      arrayFieldX.forEach((colorIndex, x) => {
        if (colorIndex) {
          let block = new Block(x, y, colorIndex);
          block.draw();
        }
      });
    });
  }

  saveTetro(tetro) {
    tetro.form.forEach((arrayTetroX, y) => {
      arrayTetroX.forEach((isBlock, x) => {
        if (isBlock) {
          let px = tetro.x + x;
          let py = tetro.y + y;

          this.data[py][px] = tetro.colorIndex;
        }
      });
    });
  }

  // 揃っているかチェック
  checkField() {
    this.data.forEach((arrayFieldX, y) => {
      if (arrayFieldX.every((colorIndex) => { return !!colorIndex })) {
        this.data.splice(y, 1);
        this.data.unshift(new Array(10).fill(0));
      }
    });
  }
}

export default Field;
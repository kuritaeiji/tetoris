import Block from './block';
import Field from './field';
import functions from '../functions'

class Tetro {
  constructor() {
    this.form = [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    this.x = (Field.COLS -  Tetro.TETRO_SIZE) / 2;
    this.y = 0;
    this.colorIndex = functions.rand(1, 5);
  }

  move(mx, my) {
    this.x += mx;
    this.y += my;
  }

  rotate() {
    let newForm = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    this.form.forEach((arrayTetroX, y) => {
      arrayTetroX.forEach((isArray, x) => {
        if (isArray) {
          newForm[x][Tetro.TETRO_SIZE - 1 - y] = 1;
        }
      });
    });
    this.form = newForm;
  }

  canMove(mx, my, isRotate, field) {
    let flag = true;
    let oldForm;
    if (isRotate) {
      oldForm = this.form;
      this.rotate();
    }
    this.form.forEach((arrayTetroX, y) => {
      arrayTetroX.forEach((isBlock, x) => {
        if (isBlock) {
          let px = this.x + x + mx;
          let py = this.y + y + my;

          if (px < 0 || px >= Field.COLS || py < 0 || py >= Field.ROWS || field.data[py][px]) {
            flag = false;
          }
        }
      });
    });
    if (isRotate) { this.form = oldForm; } // 形を元に戻す
    return flag;
  }

  draw() {
    this.form.forEach((arrayTetroX, y) => {
      arrayTetroX.forEach((isBlock, x) => {
        if (isBlock) {
          let px = this.x + x;
          let py = this.y + y;

          let block = new Block(px, py, this.colorIndex);
          block.draw();
        }
      });
    });
  }

  static get TETRO_SIZE() {
    return 4;
  }
}

export default Tetro;
import Field from './models/field';
import Tetro from './models/tetro';
import Block from './models/block';

function define(name, value) {
  Object.defineProperty(window, name, {
    value: value,
    writable: false
  });
}

Object.defineProperty(window, 'overFlag', {
  value: false,
  writable: true
});
define('CANVAS_W', Block.SIZE * Field.COLS);
define('CANVAS_H', Block.SIZE * Field.ROWS);
define('GAME_SPEED', 300);

define('can', document.getElementById('can'));
define('con', can.getContext('2d'));
can.width = CANVAS_W;
can.height = CANVAS_H;
can.style.border = '1px black solid'

const field = new Field();
let tetro = new Tetro();

function drawAll() {
  window.con.clearRect(0, 0, CANVAS_W, CANVAS_H);
  field.draw();
  tetro.draw();
}

function gameOver() {
  let s = 'Game Over';
  con.font = '40px MS ゴシック';
  let w = con.measureText(s).width;
  let x = (CANVAS_W - w) / 2;
  let y = (CANVAS_H - 20) / 2;
  con.lineWidth = 4;
  con.strokeText(s, x, y);
  con.fillStyle = 'white';
  con.fillText(s, x, y);
}

// ゲーム開始
field.draw();
tetro.draw();

setInterval(() => {
  if (overFlag) { return; }
  if (tetro.canMove(0, 1, false, field)) { 
    tetro.move(0, 1);
    drawAll();
  } else {
    field.saveTetro(tetro);
    field.checkField();
    tetro = new Tetro();
    if (!tetro.canMove(0, 0, false, field)) { overFlag = true; }
    if (overFlag) {
      gameOver();
    } else {
      drawAll();
    }
  }
}, GAME_SPEED);

document.addEventListener('keydown', (e) => {
  if (overFlag) { return; }
  switch(e.code) {
    case 'ArrowDown':
      if (tetro.canMove(0, 1, false, field)) { tetro.move(0, 1) };
      break;
    case 'ArrowLeft':
      if (tetro.canMove(-1, 0, false, field)) { tetro.move(-1, 0) };
      break;
    case 'ArrowRight':
      if (tetro.canMove(1, 0, false, field)) { tetro.move(1, 0) };
      break;
    case 'Space':
      if (tetro.canMove(0, 0, true, field)) { tetro.rotate() };
      break;
  }
});
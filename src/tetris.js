/* jshint esnext: true */
import { I, J, L, O, S, Z, T } from './shapes';
import { P, A, U, S2, E } from './pause';

// eslint-disable-next-line no-unused-expressions
'use strict';

class Tetris {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pause = false;
    this.pauseArr = [new P(4, 0), new A(4, 4), new U(4, 8), new S2(4, 12), new E(4, 16)];
    this.end = false;
    this.interv = null;
    this.heldShape = null;
    this.held = false;
    this.projShape = null;
    this.score = 0;
    document.getElementById('score-box').innerHTML = 'Level: 1 <br> Score: 0';
    document.getElementById('game-over-screen').style.display = 'none';
    this.blocks = {};
    for (let i = 0; i < height; i++) {
      this.blocks[`${i}`] = [];
    }
  }

  startFunction() {
    if (this.end === false) {
      document.getElementById('start-menu-box').style.display = 'none';
      let arr = [I, J, L, O, S, Z, T];
      this.nextShape = new arr[Math.floor(Math.random() * arr.length)](15, 5);
      this.startRound();

      this.setupKeyBindings();
    }
  }

  run(onDidEnd) {
    document.getElementById('start-menu-box').style.display = 'flex';
    document.getElementById('game-over-screen').style.display = 'none';
    document.getElementById('start-button').addEventListener('click', this.startFunction.bind(this));
    this.onDidEnd = onDidEnd;
  }

  startRound() {
    // randomly select shape
    this.held = false;
    let arr = [I, J, L, O, S, Z, T];
    this.currshape = this.nextShape;
    this.nextShape.undraw();
    this.currshape.currX = 4;
    this.currshape.currY = 0;
    // this.projShape = this.currshape.clone();
    this.currshape.draw();
    let Nxts = arr[Math.floor(Math.random() * arr.length)];
    if (Nxts === O) {
      this.nextShape = new Nxts(12.75, 5);
    } else {
      this.nextShape = new Nxts(12, 5);
    }
    this.nextShape.draw();

    if (this.checkCollisions(this.currshape.blocks)) {
      this.currshape.undraw();
      this.endGame();
    } else {
      this.project();
      this.interv = setInterval(() => {
        if (!this.pause) {
          if (this.checkCollisions(this.currshape.simulateDown)) {
            clearInterval(this.interv);
            this.stopRound();
          } else {
            this.currshape.moveDown();
            this.project();
          }
        }
      }, 1000 / (this.getLevel() / 2 + 1));
    }
  }

  stopRound() {
    // puts all the blocks of the shape inside this.blocks
    for (let block of this.currshape.blocks) {
      this.blocks[`${block.y}`].push(block);
    }
    this.projShape.undraw();
    this.checkLines();
    this.startRound();
  }

  changeHighScores() {
    let inputName = document.getElementById('name-field').value;
    let newScore = { name: inputName, score: this.score };
    if (!localStorage.getObj('scores')) { localStorage.setObj('scores', []); }
    let temp = localStorage.getObj('scores');
    temp.push(newScore);
    temp = temp.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    localStorage.setObj('scores', temp);
  }

  endGame() {
    document.getElementById('start-button').removeEventListener('click', this.startFunction.bind(this));
    this.currshape.undraw();
    this.nextShape.undraw();
    if (this.heldShape) { this.heldShape.undraw(); }

    document.getElementById('game-over-screen').style.display = 'flex';
    clearInterval(this.interv);
    this.end = true;
    for (let i = 0; i < this.height; i++) {
      this.blocks[`${i}`].forEach((block) => { block.undraw(); });
      this.blocks[`${i}`] = [];
    }

    document.getElementById('go-to-menu-button').onclick = () => {
      this.changeHighScores();
      this.onDidEnd();
      // Main.launch();
    };
  }

  getLevel() {
    return Math.floor(this.score / 100);
  }

  checkLines() {
    let lines = 0;
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.blocks[`${y}`].length === this.width) {
        lines += 1;
        this.removeLine(y);
        y = this.height; // //////////////////////////////////////////////////////
      }
    }
    this.updateScore(lines);
  }

  updateScore(lines) {
    this.score += (lines ** 2) * 10;
    document.getElementById('score-box').innerHTML = `Level: ${this.getLevel() + 1} <br> Score: ${this.score}`;
    this.changeCombo(lines);
  }

  changeCombo(lines) {
    let timesElement = document.getElementById('times');
    let comboBox = document.getElementById('combo-box');
    if (lines !== 0) {
      timesElement.innerHTML = `${lines}x`;
      comboBox.classList.add('info-block__combo-box-animation-class');
      setTimeout(() => comboBox.classList.remove('info-block__combo-box-animation-class'), 2000);
    }
  }

  removeLine(y) {
    for (let block of this.blocks[`${y}`]) {
      block.undraw();
    }

    this.blocks[`${y}`] = [];
    for (let i = y; i > 0; i--) {
      this.blocks[`${i}`] = this.blocks[`${i - 1}`];
      this.blocks['0'] = [];
      for (let block of this.blocks[`${i}`]) {
        block.y += 1;
        block.undraw();
        block.draw();
      }
    }
  }

  hold() {
    if (this.heldShape) {
      let h = new this.heldShape.constructor(4, 0);
      let c = new this.currshape.constructor(12, 10);
      this.heldShape.undraw();
      this.heldShape = c;
      this.heldShape.draw();
      this.currshape.undraw();
      this.currshape = h;
      this.currshape.draw();
    } else {
      clearInterval(this.interv);
      this.heldShape = new this.currshape.constructor(12, 10);
      this.currshape.undraw();
      this.heldShape.draw();
      this.startRound();
    }
    this.project();
  }

  slam() {
    clearInterval(this.interv);
    while (!this.checkCollisions(this.currshape.simulateDown)) {
      this.currshape.moveDown();
    }
    this.stopRound();
  }

  project() {
    if (this.projShape) {
      this.projShape.undraw();
    }
    this.projShape = this.currshape.clone();
    this.projShape.draw();
    while (!this.checkCollisions(this.projShape.simulateDown)) {
      this.projShape.moveDown();
    }
    this.projShape.blocks.forEach((block) => { block.noColor(); });
  }

  gamePause() {
    if (this.pause) {
      this.pauseArr.forEach((shape) => { shape.draw(); });
      for (let i = 0; i < this.height; i++) {
        this.blocks[`${i}`].forEach((block) => { block.transparent(); });
      }
      this.currshape.blocks.forEach((block) => { block.transparent(); });
      this.projShape.blocks.forEach((block) => { block.transparent(); });
    } else {
      this.pauseArr.forEach((shape) => { shape.undraw(); });
      for (let i = 0; i < this.height; i++) {
        this.blocks[`${i}`].forEach((block) => { block.opaque(); });
      }
      this.currshape.blocks.forEach((block) => { block.opaque(); });
      this.projShape.blocks.forEach((block) => { block.opaque(); });
    }
  }


  setupKeyBindings() {
    // setup event listeners
    window.addEventListener('keydown', (e) => {
      if (!this.pause && !this.end) {
        if (e.keyCode === 39 && !this.checkCollisions(this.currshape.simulateRight)) {
          this.currshape.moveRight();
          this.project();
        }
        if (e.keyCode === 37 && !this.checkCollisions(this.currshape.simulateLeft)) {
          this.currshape.moveLeft();
          this.project();
        }
        if (e.keyCode === 40 && !this.checkCollisions(this.currshape.simulateDown)) {
          this.currshape.moveDown();
          // this.project();
        }

        if (e.keyCode === 32) {
          this.slam();
        }

        // eslint-disable-next-line eqeqeq
        if (e.keyCode == (localStorage.getItem('rotate') || 82)) {
          this.currshape.rotate();
          if (this.checkRotateCollisions(this.currshape.blocks)) {
            this.currshape.rollback();
          } else {
            this.project();
          }
        }

        // eslint-disable-next-line eqeqeq
        if (e.keyCode == (localStorage.getItem('hold') || 72) && !this.held) {
          this.held = true;
          this.hold();
        }
      }

      // eslint-disable-next-line eqeqeq
      if (e.keyCode == (localStorage.getItem('pause') || 80) && !this.end) {
        this.pause = !this.pause;
        this.gamePause();
      }
    });
  }


  checkCollisions(arrayOfCoords) {
    return arrayOfCoords.some((coords) => {
      if (coords.x < 0 || coords.x >= this.width || coords.y >= this.height) {
        return true;
      }
      for (let y = 0; y < this.height; y++) {
        let arr = this.blocks[`${y}`];
        for (let oldblock of arr) {
          if (coords.x === oldblock.x && coords.y === oldblock.y) {
            return true;
          }
        }
      }
      return false;
    });
  }

  checkRotateCollisions(arrayOfCoords) {
    return arrayOfCoords.some((coords) => {
      if (coords.y >= this.height) {
        return true;
      }
      for (let y = 0; y < this.height; y++) {
        let arr = this.blocks[`${y}`];
        for (let oldblock of arr) {
          if (coords.x === oldblock.x && coords.y === oldblock.y) {
            return true;
          }
        }
      }
      return false;
    });
  }
}

// eslint-disable-next-line func-names
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
// eslint-disable-next-line func-names
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

export { Tetris };

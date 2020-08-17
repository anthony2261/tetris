import { Block } from './block';

class Shape {
  constructor(currX, currY, rotation = 0) {
    this.currX = currX;
    this.currY = currY;
    this.rotation = rotation;
    this.blocks = [];
  }

  clone() {
    return new this.constructor(this.currX, this.currY, this.rotation);
  }

  draw() {
    let blocksCoords = this.constructor.blockOptions[this.rotation];
    for (let blockCoord of blocksCoords) {
      let block = new Block({
        x: blockCoord.x + this.currX,
        y: blockCoord.y + this.currY,
        color: this.constructor.color,
        unit: 20,
      });
      this.blocks.push(block);
      block.draw();
    }
  }

  undraw() {
    this.blocks.forEach(block => block.undraw());
    this.blocks = [];
  }

  refresh() {
    this.undraw();
    this.draw();
  }

  moveRight() {
    this.currX += 1;
    this.refresh();
  }

  moveLeft() {
    this.currX -= 1;
    this.refresh();
  }

  moveDown() {
    this.currY += 1;
    this.refresh();
  }

  saveState() {
    // let state = ['currX', 'currY', 'rotation'].reduce((obj, key, i) => ({ ...obj, [key]: i }), {});
    // eslint-disable-next-line no-return-assign
    let state = ['currX', 'currY', 'rotation'].reduce((obj, key) => (obj[key] = this[key], obj), {});
    this.stateSnapshot = state;
  }

  rollback() {
    for (let [key, value] of Object.entries(this.stateSnapshot)) {
      this[key] = value;
    }
    this.refresh();
  }

  rotate() {
    this.saveState();
    this.rotation = (this.rotation + 90) % 360;
    this.refresh();
    let min = 100;
    let max = 0;
    for (let block of this.blocks) {
      if (block.left > max) {
        max = block.left;
      } else if (block.left < min) {
        min = block.left;
      }
    }

    for (let i = 0; i > min; i--) {
      this.moveRight();
    }
    for (let i = 0; i <= max - 10; i++) {
      this.moveLeft();
    }
  }

  get simulateLeft() {
    let arr = [];
    this.blocks.forEach((block) => { arr.push(block.simulateLeft); });
    return arr;
  }

  get simulateRight() {
    let arr = [];
    this.blocks.forEach((block) => { arr.push(block.simulateRight); });
    return arr;
  }

  get simulateDown() {
    let arr = [];
    this.blocks.forEach((block) => { arr.push(block.simulateDown); });
    return arr;
  }
}


class I extends Shape {
  static get color() {
    return 'block_color_blue';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      90: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      180: [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
      270: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
    };
  }
}

class J extends Shape {
  static get color() {
    return 'block_color_red';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      90: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
      180: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      270: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }],
    };
  }
}

class L extends Shape {
  static get color() {
    return 'block_color_orange';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }],
      90: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
      180: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }],
      270: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
    };
  }
}

class O extends Shape {
  static get color() {
    return 'block_color_magenta';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
      90: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
      180: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
      270: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    };
  }
}

class S extends Shape {
  static get color() {
    return 'block_color_cyan';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      90: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      180: [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      270: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
    };
  }
}


class Z extends Shape {
  static get color() {
    return 'block_color_lime';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      90: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
      180: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
      270: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    };
  }
}

class T extends Shape {
  static get color() {
    return 'block_color_yellow';
  }

  static get blockOptions() {
    return {
      0: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      90: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
      180: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
      270: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
    };
  }
}

// eslint-disable-next-line object-curly-newline
export { Shape, I, J, L, O, S, Z, T };

import { Shape } from './shapes';

class P extends Shape {
  static get color() {
    return 'block_color_red';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      90: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      180: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      270: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
    };
  }
}

class A extends Shape {
  static get color() {
    return 'block_color_blue';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      90: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      180: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      270: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    };
  }
}

class U extends Shape {
  static get color() {
    return 'block_color_orange';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      90: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      180: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      270: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    };
  }
}

class S2 extends Shape {
  static get color() {
    return 'block_color_lime';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      90: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      180: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      270: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    };
  }
}

class E extends Shape {
  static get color() {
    return 'block_color_magenta';
  }

  static get blockOptions() {
    return {
      0: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1.5 }, { x: 2, y: 3 }],
      90: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1.5 }, { x: 2, y: 3 }],
      180: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1.5 }, { x: 2, y: 3 }],
      270: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 1.5 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1.5 }, { x: 2, y: 3 }],
    };
  }
}

export { P, A, U, S2, E };

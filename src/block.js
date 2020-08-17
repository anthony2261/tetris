
const CONTAINER = document.body;
class Block {
  // eslint-disable-next-line object-curly-newline
  constructor({ x, y, color, unit }) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.unit = unit;
  }

  get simulateLeft() {
    return { x: this.x - 1, y: this.y };
  }

  get simulateRight() {
    return { x: this.x + 1, y: this.y };
  }

  get simulateDown() {
    return { x: this.x, y: this.y + 1 };
  }

  get left() {
    return this.x;
  }

  transparent() {
    this.element.style.opacity = '0.2';
  }

  opaque() {
    this.element.style.opacity = '1';
  }

  noColor() {
    this.element.style.background = '0';
  }

  draw() {
    let block = document.createElement('div');
    block.setAttribute('class', `block ${this.color}`);
    block.style.left = `${this.x * this.unit}px`;
    block.style.top = `${this.y * this.unit}px`;
    block.style.width = `${this.unit}px`;
    block.style.height = `${this.unit}px`;
    CONTAINER.appendChild(block);
    this.element = block;
  }

  undraw() {
    this.element.parentNode.removeChild(this.element);
  }
}

export { Block };

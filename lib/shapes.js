class circle {
  constructor(color, text, shape) {
    this.color = color;
    this.text = text;
    this.shape = shape;
  }
  render(param) {
    let shapeElement;

    if (this.shape === 'circle') {
      shapeElement = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }

    return `<svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
          ${this.text}
        </text>
      </svg>`;
  }
}

class square {
  constructor(color, text, shape) {
    this.color = color;
    this.text = text;
    this.shape = shape;
  }
  render(param) {
    let shapeElement;

    if (this.shape === 'square') {
      shapeElement = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }

    return `<svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      > +
        ${shapeElement} + 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
          ${this.text}
        </text>
      </svg>`;
  }
}

class triangle {
  constructor(color, text, shape) {
    this.color = color;
    this.text = text;
    this.shape = shape;
  }
  render(param) {
    let shapeElement;

    if (this.shape === 'triangle') {
      shapeElement = `<polygon points="150,20 50,180 250,180" fill="${this.color}" />`;
    }

    return `<svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
          ${this.text}
        </text>
      </svg>`;
  }
}

module.exports = {
  circle,
  square,
  triangle,
};

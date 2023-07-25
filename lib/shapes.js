const { SVG } = require('@svgdotjs/svg.js');

class Shape {
  constructor() {
    // Add common properties shared by the child classes here, if any
  }

  setColor(color) {
    // Set the color property for the shape
  }

  render() {
    // Implement the render method for the corresponding SVG string
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    // Additional properties specific to the Triangle class, if any
  }

  render() {
    // Implement the render method to return the SVG string for a triangle
  }
}

class Circle extends Shape {
  constructor() {
    super();
    // Additional properties specific to the Circle class, if any
  }

  render() {
    // Implement the render method to return the SVG string for a circle
  }
}

class Square extends Shape {
  constructor() {
    super();
    // Additional properties specific to the Square class, if any
  }

  render() {
    // Implement the render method to return the SVG string for a square
  }
}

module.exports = { Shape, Triangle, Circle, Square };

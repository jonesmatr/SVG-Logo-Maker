class Shape { // Shape class 
    constructor() {
        this.color = 'black'; // Default color
    }

    setColor(color) { 
        this.color = color;
    }
}
// Create an object of the classes that will be used to create the Shape object with the given properties
class Triangle extends Shape { 
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="90" r="90" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
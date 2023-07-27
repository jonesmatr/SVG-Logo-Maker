// import { Triangle, Circle, Square } from './shapes';
const { Triangle, Circle, Square } = require('./shapes');

// Create tests for each shape type 
test('Triangle render with blue color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Circle render with red color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="90" r="90" fill="red" />');
});

test('Square render with yellow color', () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="yellow" />');
});
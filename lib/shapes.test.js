const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render with blue color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});
test('Circle render with red color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="150" r="100" fill="red" />');
});
test('Square render with yellow color', () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<rect x="150" y="150" width="100" height="100" fill="yellow" />');
});

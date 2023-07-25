// index.js
const chalk = require('chalk');
const { promptUser } = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { saveSVGToFile } = require('./lib/fileWriter');

async function main() {
  console.log(chalk.blue('Welcome to the Logo Generator!'));

  try {
    const { text, textColor, shape, shapeColor } = await promptUser();
    let shapeObj;

    if (shape === 'circle') {
      shapeObj = new Circle();
    } else if (shape === 'triangle') {
      shapeObj = new Triangle();
    } else if (shape === 'square') {
      shapeObj = new Square();
    }

    if (shapeObj) {
      shapeObj.setColor(shapeColor);
      const svg = shapeObj.render();
      saveSVGToFile(svg, 'logo.svg');
    } else {
      console.error(chalk.red('Invalid shape selection'));
    }
  } catch (error) {
    console.error(chalk.red('An error occurred:', error));
  }
}

main();

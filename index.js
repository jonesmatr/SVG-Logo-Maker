const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() { // Get the user's input
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => (input.length <= 3) ? true : "Enter up to three characters only!"
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword (OR a hexadecimal number) for the text:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword (OR a hexadecimal number) for the shape:',
        }
    ];

    const answers = await inquirer.prompt(questions); // Get the user's input and store it in the answers object
    let shapeInstance;

    switch(answers.shape) { // Determine the shape instance based on the user's input
        case 'circle':
            shapeInstance = new Circle();
            break;
        case 'triangle':
            shapeInstance = new Triangle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
    }

    shapeInstance.setColor(answers.shapeColor);
    // Determine the y-value for text position based on shape
    let textYPosition = '105'; // Default for circle and square
    if (answers.shape === 'triangle') {
        textYPosition = '150'; // Adjusted value for triangle
    }

    // Determine the x-value for text position based on shape
    const svgContent = ` 
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
            <text x="150" y="${textYPosition}" font-family="Arial" font-size="45" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
        </svg>
    `;
    // Write the svg content to the file
    await fs.writeFile('./examples/logo.svg', svgContent);
    console.log("Generated logo.svg");
}

main();
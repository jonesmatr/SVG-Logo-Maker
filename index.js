import inquirer from 'inquirer';
import fs from 'fs/promises';  // Using the promise-based version of fs for async/await operations if needed
import { Triangle, Circle, Square } from './lib/shapes.js';


async function main() {
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

    const answers = await inquirer.prompt(questions);
    let shapeInstance;

    switch(answers.shape) {
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
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
            <text x="150" y="105" font-family="Arial" font-size="45" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
    console.log("Generated logo.svg");
}

main();

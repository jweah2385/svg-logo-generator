const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes.js');
const { resourceUsage } = require('process');
let questions = () => {
  const inputs = inquirer
    .prompt([
      {
        type: 'input',
        name: 'textAns',
        message: 'What text do you want of the logo, must be only 3 letters.',
      },
      {
        type: 'list',
        name: 'shapeAns',
        message: 'Choose the shape of the logo.',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'colorAns',
        message: 'What color do you want the logo to be?',
      },
    ])
    .then((data) => {
      const { textAns, shapeAns, colorAns } = data;
      let userShape;
      if (shapeAns == 'square') {
        const square = new shape.square(colorAns, textAns, shapeAns);
        userShape = square.render();
        return userShape;
      } else if (shapeAns == 'triangle') {
        const triangle = new shape.triangle(colorAns, textAns, shapeAns);
        userShape = triangle.render();
        return userShape;
      } else if (shapeAns == 'circle') {
        const circle = new shape.circle(colorAns, textAns, shapeAns);
        userShape = circle.render();
        return userShape;
      } else {
        questions();
      }
    })
    .then((data) => {
      fs.writeFile('logo.svg', data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
      });
    });
};
questions();

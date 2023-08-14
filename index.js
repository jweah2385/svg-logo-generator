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
        message:
          'What text do you want of the logo, must be only 3 letters or less.',
        validate: function (textAns) {
          if (textAns.length > 3) {
            console.log(
              `:  Your input must be three letters or less. Erase your answer and input a response that is up to three letters.`
            );
            textAns = '';
            return inputs();
          } else return true;
        },
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
      console.log(textAns.length);
      if (textAns.length == 3) {
        if (shapeAns == 'square') {
          const square = new shape.square(colorAns, textAns, shapeAns);
          userShape = square.render();
          console.log(userShape);
          return userShape;
        } else if (shapeAns == 'triangle') {
          const triangle = new shape.triangle(colorAns, textAns, shapeAns);
          userShape = triangle.render();
          return userShape;
        } else if (shapeAns == 'circle') {
          const circle = new shape.circle(colorAns, textAns, shapeAns);
          userShape = circle.render();
          return userShape;
        }
      } else {
        console.log('You did not enter 3 words or a color');
      }
    })
    .then((data) => {
      fs.writeFile('logo.svg', data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
      });
    });
};
questions();

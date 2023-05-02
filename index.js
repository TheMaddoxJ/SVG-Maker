const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo');

// An array for the questions variable to be called later on.
const questions = [
    {
      type: 'input',
      message: 'Enter up to 3 characters.',
      name: 'logo-characters',
    },
    {
      type: 'input',
      message: 'What color do you want your text to be?',
      name: 'text-color',
    },
    {
      type: 'list',
      message: 'What shape would you like?',
      name: 'shape',
      choices: [
        "Circle",
        "Triangle",
        "Square"
      ]
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shape-color',
      },
];

  // This function will create the svg logo after all the data is input from the user and send an error if incomplete.
function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error) {
        if (error) {
            return console.log(error);
        }
        console.log("logo.svg generated!")
    });
}

// init function.
function init() {
  inquirer.prompt(questions).then(function (data){
    var fileName = 'logo.svg';
    console.log('data', data);
    writeToFile(fileName, data);
  });
}

// Call to initialize app.
init();


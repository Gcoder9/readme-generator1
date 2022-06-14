// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
const { stringify } = require('querystring');
// TODO: Create an array of questions for user input
const questions = [
    {

        type: "input",

        message: "What is the title of the project?",

        name: "Title",
    },
    {
        type: "input",

        message: "What is the project about?",

        name: "Description",
    },
    {
        type: "input",

        message: "Table of Contents",

        name: "Table of Contents",
    },
    {
        type: "input",

        message: "What do you need to install to run the app?",

        name: "installation",
    },
    {
        type: "input",

        message: "How is the app used?",

        name: "Usage",
    },
    {
        type: "input",

        message: "who contributed to the project?",

        name: "Contributing"
    },
    {
        type: "input",

        message: "what commands are neededto test this app?",

        name: "Tests",

    },
    {
        type: "input",

        message: "Contact info for inquiries",

        name: "Questions",

    },
    {
        type: "input",

        message: "what is yoour github username?",

        name: "Username",

    },
    {
        type: "input",

        message: "what is your Email address?",

        name: "Email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile("README.md", content, function (err) {
console.log(fileName)
console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }


    })


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then( data => {
            let fileName = "README.md";
            writeToFile(fileName,data);
           // fs.writeFile(fileName,generateMarkdown(data), err => err ? console.log(err):console.log("done"))
            console.log(data)
        });
}

// Function call to initialize app
init();

const generateMarkdown=(data)=> {
    

` # ${data.Title}
 https://github.com/${data.Username}/${data.Title}
 # Desrciption
 ${data.Description}
 # Table of Contents
 [Installation](#installation)
 [Usage](#usage)
 [License](#license)
 [Contributing](#contributing)
 [Tests](#tests)
 [Questions](#questions)
 # Installation
 The following must be installed to run the application.
 #Usage
 To use this app, ${data.Usage}
 #License
 This project is licensed under the ${data.License} license.
 ![Github license](https://img.shields.io/badge/license-mit-blue.svg)
 # Contributing
 Contributors: ${data.Contributing}
 # Tests
 The following is needed to run the test: ${data.Tests}
 # Questions
 If you have any questions contact ${data.Username} or ${data.Email}`








}
module.exports = generateMarkdown;


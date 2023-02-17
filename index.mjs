import inquirer from "inquirer";
import fs from "fs/promises";

let {title, description, installinstruct, usage, license, contributing, tests, gitUsername, email} = await inquirer 

.prompt([
    {
        type: 'input',
        name: 'title',
        message: "Write the title of your project:",
      },
      {
        type: 'input',
        name: 'description',
        message: "Write a description of your project:",
      },
      {
        type: 'input',
        name: 'installinstruct',
        message: "Write installation instructions for your project:",
      },
      {
        type: 'list',
        name: 'license',
        message: "What license was used?",
        choices: ['Apache', 'Boost','BSD 3'],
        filter(val) {
            return val.toLowerCase();
        },
      },
      {
        type: 'input',
        name: 'usage',
        message: "Describe the usage of your project:",
      },

      {
        type: 'input',
        name: 'contributing',
        message: "Write any contributing guidelines:",
      },

      {
        type: 'input',
        name: 'tests',
        message: "Write any testing instructions:",
      },

      {
        type: 'input',
        name: 'gitUsername',
        message: "Provide your GitHub username for any questions:",
      },

      {
        type: 'input',
        name: 'email',
        message: "Provide your email address for any questions:",
      },




])

let readmeText = `

${generateLicense(license)}

# ${title}

## Project Description

${description}


## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installinstruct}

## Usage

${usage}

## License

${generateLicenseText(license)}

## Contributing

${contributing}

## Tests

${tests}

## Questions

https://github.com/${gitUsername}

For further questions, please email: ${email}

`

fs.writeFile("generated-README.md",readmeText )
//console.log (first_name, last_name);

function generateLicense(license) {
    if (license === "apache") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "boost") {
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "bsd 3") {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      return "Invalid option";
    }
  }

  function generateLicenseText(license) {
    if (license === "apache") {
      return "Apache: please see: https://opensource.org/licenses/Apache-2.0";
    } else if (license === "boost") {
      return "Boost: please see: https://www.boost.org/LICENSE_1_0.txt";
    } else if (license === "bsd 3") {
      return "BSD 3: please see: https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      return "Invalid option";
    }
  }


  
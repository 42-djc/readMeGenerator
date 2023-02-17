import inquirer from "inquirer";
import fs from "fs/promises";

let {description, license} = await inquirer 

.prompt([
    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project:",
      },
      {
        type: 'list',
        name: 'license',
        message: "What license was used?",
        choices: ['option1', 'option2','option3'],
        filter(val) {
            return val.toLowerCase();
        },
      },

])

let readmeText = `# Project Description

${description}


## The second largest heading

${generateLicense(license)}

###### The smallest heading`

fs.writeFile("REAMDME.md",readmeText )
//console.log (first_name, last_name);

function generateLicense(license){

    if (license === "option1")

    return "option 1 was chosen";
}
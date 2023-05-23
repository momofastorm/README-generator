const { writeFile } = require('fs');

function generateMarkdown(data) {
  console.log(data);

  let output = `
# ${data.title}
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}
## Usage
${data.usage}

## Author(s)
${data.author}

## License

${data.license}

## Tests
${data.tests}

## Questions
[Github](https://github.com/${data.github})

[Email](mailto:${data.email})

`;

  console.log(output);

  writeFile('dist/README.md', output, err => {
    if (err) throw err;

    console.log('README.md created in dist folder!!!');
  })
}

module.exports = generateMarkdown;

const { prompt } = require('inquirer');
const {questions, genMD} = require('./utils');

prompt(questions).then(genMD);
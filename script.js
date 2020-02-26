const inq = require('inquirer')
const axios = require('axios')


inq.prompt([
    {
        name: 'gituser',
        message: "What is your github username?"
    },
    {
        name: "projectname",
        message: "What is your project's name?",
    },
    {
        name: "description",
        message: "Please give a brief description of your project.",
    },
    {
        name: "install",
        message: "How do I install your project?",
    },
    {
        name: "test",
        message: "Any tests?",
    },
    {
        type: "list",
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'GNU'],
    },
]
).then(answers =>{
console.log(answers)
}

)
const inq = require('inquirer')
const axios = require('axios')
const fs = require('fs')
const functions = require('./functions')
const api = require('./utils/api')


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
functions.projectName(answers.projectname)
functions.description(answers.description)
return api.getUser(answers.gituser)
})
.then(({ data }) => {
functions.profileImage(data[0].owner.avatar_url)
})
.catch(function(error){
    console.log(error)
})



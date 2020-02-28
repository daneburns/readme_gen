const inq = require('inquirer')
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const functions = require('./functions')
const api = require('./utils/api')
const appendFile = util.promisify(fs.appendFile)


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
        name: "contribute",
        message: "How would you like users to contribute?",
    },
    {
        name: "usage",
        message: "How would you like users to use this program?",
    },
    {
        type: "list",
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'GPL', 'BSD-3'],
    },
]
).then(answers => {
    init(answers)
    return api.getUser(answers.gituser)
}).then(({ data }) => {
        functions.profileImage(data[0].owner.avatar_url)})
    .catch(function (error) {
        console.log(error)
    })


async function init(answers) {
    try {
        const f1 = await functions.projectName(answers.projectname)
        const f2 = await functions.description(answers.description)
        const f3 = await functions.tableOfContents()
        const f4 = await functions.install(answers.install)
        const f5 = await functions.testing(answers.test)
        const f6 = await functions.license(answers.license)
        const f7 = await functions.contribute(answers.contribute)
        const f8 = await functions.usage(answers.usage)
        await appendFile('README.md', f1)
        await appendFile('README.md', f2)
        await appendFile('README.md', f3)
        await appendFile('README.md', f4)
        await appendFile('README.md', f5)
        await appendFile('README.md', f7)
        await appendFile('README.md', f8)
        await appendFile('README.md', f6)
        
    }
    catch(error){ 
            console.log(error)
        }
    }

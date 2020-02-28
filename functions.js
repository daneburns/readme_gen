const fs = require("fs");

function projectName(projectname) {
  let projectString = projectname;
  let toOutput = `# ${projectString} \n`;
  return toOutput
}

function description(description) {
  let descString = description;
  let toOutput = `#### ${descString} \n`;
return toOutput
}

function tableOfContents() {
  let toOutput = `
## Table Of Contents:
  1. Installation 
  2. Testing 
  3. Contributing
  4. License `
  return toOutput
}

function profileImage(imgsrc) {
  let imgtoAppend = `\n![userimage](${imgsrc})`;
  let authorInformation = `\n`
  fs.appendFile('README.md', imgtoAppend, function(e){
    if(e){
      console.log(e)
    }
  })
}

function install(install) {
  let installString = install;
  let toOutput = `\n## Installation: \n ${installString} \n`;
  return toOutput
}

function testing(testing) {
  let testingString = testing;
  let toOutput = `\n## Testing: \n ${testingString} \n`;
  return toOutput
}

function license(license) {
  if (license === 'MIT') {
    let badgetoAppend = `\n## License: \n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n`;
   return badgetoAppend
  }
  if (license === 'BSD-3') {
    let badgetoAppend = `\n## License: \n [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) \n`;
    return badgetoAppend

  }

  if (license === 'GNU') {
    let badgetoAppend = `\n## License: \n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) \n`;
    return badgetoAppend
  }
}

function contribute(contribute){
  let contributeString = `## Contributing: \n ${contribute} \n`
  return contributeString
}

function usage(usage){
  let usageString = `## Usage: \n${usage} \n`
  return usageString
}
module.exports = {
  projectName: projectName,
  description: description,
  profileImage: profileImage,
  install: install,
  testing: testing,
  license: license,
  tableOfContents: tableOfContents,
  contribute: contribute,
  usage: usage,
};

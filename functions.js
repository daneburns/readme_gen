const fs = require("fs");

function projectName(projectname) {
  let projectString = JSON.stringify(projectname);
  let toOutput = `# ${projectString} \n`;

  fs.appendFile("README.md", toOutput, function(e) {
    if (e) {
      console.log(e);
    }
  });
}

function description(description) {
  let descString = JSON.stringify(description);
  let toOutput = `#### ${descString} \n`;

  fs.appendFile("README.md", toOutput, function(e) {
    if (e) {
      console.log(e);
    }
  });
}

function profileImage(imgsrc) {
  let imgtoAppend = `![userimage](${imgsrc})`;
  fs.appendFile("README.md", imgtoAppend, function(e) {
    if (e) {
      console.log(e);
    }
  });
}

module.exports = {
  projectName: projectName,
  description: description,
  profileImage: profileImage
};

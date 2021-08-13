const inquirer = require("inquirer");

module.exports=
[
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is their employee ID number?",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is their office number?",
    name: "officeNumber",
  },
  {
    type: "confirm",
    message: "Do you want to add an engineer to the team?",
    name: "addEngineerYN",
  },

  .then((answer) => {
    if (addEngineerYN.answer = true) {
      inquirer.prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is their employee ID number?",
          name: "engineerID",
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is the engineer's GitHub username?",
          name: "engineerGitHub",
        },
        {
          type: "confirm",
          message: "Do you want to add an intern to the team?",
          name: "addInternYN",
        },
      
      ]) 
    } else {
      console.log("engineer not added")
    };
  })
  
  
  .then((answer) => {
    if (addInternYN.answer = true) {
      inquirer.prompt ([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is their employee ID number?",
          name: "internID",
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What school does the intern go to?",
          name: "engineerGitHub",
        },
      ])
    }
  })
  
];



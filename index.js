// Code needed:
// Inquirer NPM, Jest NPM - both are currently installed in directory

// code is invoked via node index.js
// Inquirer runs, asking for the following information:
// Team Manager's Name, Employee ID, Email Address, Office Number
// After the questions have been answered, there's a menu with the option to add engineer, add an intern, or finish building the team
// if engineer is selected, name, ID, email, GitHub Username are required
// after entering information, taken back to the menu.
// if an intern is selected, name, ID, email, and school are needed
// after entering information, taken back to the menu
// upon completion, the team will be built and html will be generated

// 1. set up question structure for the program (done)
// 2. set up classes and sub classes (done)
// 3. set up tests
// 4. run tests
// 5. create html page (done)
// 6. create css for html page and cards (done)
// 7. create README with screenshots, video link, link to deployed and repo (done)

const inquirer = require("inquirer");
const fs = require("fs");

// const managerQ = require(filepath);
// const engineerQ = require(filepath);
// const internQ = require(filepath);

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

// function controls the engineer questions
function askEngineerQ() {
  inquirer.prompt(engineerQ).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGitHub
    );
    employees.push(engineer);
    menu();
  });
}

// this function controlls the intern questions
function askInternQ() {
  inquirer.prompt(internQ).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    employees.push(intern);
    menu();
  });
}

// questions array for the manager
const managerQ = [
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
];
// questions array for the engineer
const engineerQ = [
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
];

// questions array for the intern
const internQ = [
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
    message: "What school does the intern attend?",
    name: "internSchool",
  },
];

// function for the menu
function menu() {
  inquirer
    .prompt({
      type: "list",
      name: "employeeType",
      message: "Which employee do you want to add?",
      choices: ["Engineer", "Intern", "Exit"],
    })
    .then((answers) => {
      if (answers.employeeType === "Engineer") {
        askEngineerQ();
      } else if (answers.employeeType === "Intern") {
        askInternQ();
      } else {
        createTeam();
      }
    });
}

// function to create the team based on answers and loop
function createTeam() {
  let cardString = "";
  for (let index = 0; index < employees.length; index++) {
    cardString = cardString + card(employees[index]);
  }

  // writes the index.html to the folder
  fs.writeFileSync("index.html", html(cardString));
  // console.log(answers);
}

// this prompts the inquirer when the user types node index.js
inquirer.prompt(managerQ).then((answers) => {
  const manager = new Manager(
    answers.managerName,
    answers.employeeID,
    answers.managerEmail,
    answers.officeNumber
  );

  employees.push(manager);
  menu();
});

// this creates each card based on the answers they provide
function card(answers) {
  let newField = "";

  if (answers.getRole() === "Manager") {
    newField = `<li class="list-group-item"><span class="boldText">Office Number:</span> ${answers.officeNumber}</li>`;
  }
  else if (answers.getRole() === "Engineer") {
    newField = `<li class="list-group-item"><span class="boldText">GitHub Username:</span><a href="https://github.com/${answers.gitHub}"> ${answers.gitHub}</a></li>`;
  }
  else if (answers.getRole() === "Intern") {
    newField = `<li class="list-group-item"><span class="boldText">School:</span> ${answers.school}</li>`;
  }

  return ` <div class="card" style="width: 18rem;">
  <div class="card-header text-white"><span class="boldText">
  ${answers.name}:</span>  ${answers.getRole()}
  </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="boldText">ID:</span> ${answers.id}</li>
          <li class="list-group-item"><span class="boldText">Email:</span><a href="mailto:${answers.email}"> ${answers.email}</a></li>
          ${newField}
      </ul>
  </div>`;
}

// this creates the html and puts the card in. card is the collective everything
function html(card) {
  const htmlFile = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>our Dev Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link href ="./dist/style.css" rel="stylesheet">
    </head>
  <body>

  <nav class="navbar navbar-light text-white ">
      <div class="container-fluid">
        <span class="navbar-brand mx-auto mb-0 text-white">Our Dev Team</span>
      </div>
  </nav>

  <div class="cardContainer">
    ${card}
  </div>   
  </body>
  </html>`;
  return htmlFile;
}

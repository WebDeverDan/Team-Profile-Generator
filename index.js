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
// 2. set up classes and sub classes
// 3. set up tests
// 4. run tests
// 5. create html page (done)
// 6. create css for html page and cards
// 7. create README with screenshots, video link, link to deployed and repo

const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
// const questions = require("./data/questions");

// asks for an intern(during engineering question)
function wantIntern() {
  inquirer.prompt(addInternQ).then((answers) => {
    if (answers.standAloneAddIntern) {
      askInternQ();
    }
  });
}

// this function controlls the intern questions
function askInternQ() {
  inquirer.prompt(internQ).then((answers) => {
    if (answers.otherInternYN) {
      fs.appendFile(
        "index.html",
        `<div class="card" style="width: 18rem;">
      <div class="card-header">
      ${answers.internName}: Intern
      </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${answers.internID}</li>
              <li class="list-group-item"> Email: ${answers.internEmail}</li>
              <li class="list-group-item">School: ${answers.internSchool}</li>
          </ul>
      </div>`,
        (err) => (err ? console.error(err) : askInternQ())
      );
      console.log(answers);
    } else if (answers.otherInternYN == false) {
      fs.appendFile(
        "index.html",
        `<div class="card" style="width: 18rem;">
        <div class="card-header">
        ${answers.internName}: Intern
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${answers.internID}</li>
                <li class="list-group-item"> Email: ${answers.internEmail}</li>
                <li class="list-group-item">School: ${answers.internSchool}</li>
            </ul>
        </div>`,
        (err) => (err ? console.error(err) : console.log(answers))
      );
    }
  });
}
// this function asks the engineer questions
function askEngineerQ() {
  inquirer.prompt(engineerQ).then((answers) => {
    if (answers.otherEngineerYN) {
      fs.appendFile(
        "index.html",
        `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${answers.engineerName}: Engineer
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.engineerID}</li>
            <li class="list-group-item"> Email: ${answers.engineerEmail}</li>
            <li class="list-group-item">GitHub Username: ${answers.engineerGitHub}</li>
        </ul>
    </div>`,
        (err) => (err ? console.error(err) : askEngineerQ())
      );
      console.log(answers);
    } else if (answers.otherEngineerYN == false) {
      fs.appendFile(
        "index.html",
        `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${answers.engineerName}: Engineer
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.engineerID}</li>
            <li class="list-group-item"> Email: ${answers.engineerEmail}</li>
            <li class="list-group-item">GitHub Username: ${answers.engineerGitHub}</li>
        </ul>
    </div>`,
        (err) => (err ? console.error(err) : wantIntern())
      );
      console.log(answers);
    }
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
  {
    type: "confirm",
    message: "Do you want to add an engineer to the team?",
    name: "engineerYN",
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
  {
    type: "confirm",
    message: "Do you want to add another engineer to the team?",
    name: "otherEngineerYN",
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
  {
    type: "confirm",
    message: "Do you want to add another intern to the team?",
    name: "otherInternYN",
  },
];

// questions array to ask if the user does not want to add a manager
const addInternQ = [
  {
    type: "confirm",
    message: "Do you want to add an intern to the team?",
    name: "standAloneAddIntern",
  },
];

// this prompts the inquirer 
inquirer.prompt(managerQ).then((answers) => {
  // need to write code to create html
  // need to write code to put answers from managerQ into html
  const htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    <body>

    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Our Team</span>
        </div>
    </nav>


    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${answers.managerName}: Manager
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.employeeID}</li>
            <li class="list-group-item"> Email: ${answers.managerEmail}</li>
            <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
        </ul>
    </div>

    </body>
    </html>`;

// writes the index.html to the folder
  fs.writeFileSync("index.html", htmlFile);
  console.log(answers);
  // if answer is yes
  // it will create html block for the manager answers (done)
  if (answers.engineerYN) {
    // it will run the engineering questions
    askEngineerQ();
  } else wantIntern();


  function init() {}
  //  call to initialize app
  init();
});

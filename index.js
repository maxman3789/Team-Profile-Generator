const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const render = require("./result/htmlfile.js");

const newMember = [];
const idArray = [];

function init() {

  function addManager() {
    console.log("Please build your team");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?",
        
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the team manager's id?",
          
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
          
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
          
        },
      ])
      .then((answers) => {
        // creates a manager object from class Engineer
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );

        // adds Manager object
        newMember.push(manager);
    
        // adds manager id to idArray 
        idArray.push(manager.managerId);

        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        // prompts questions to user
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
          
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
          
        },
  
      ])
      .then((answers) => {
        // creates an engineer object from class Engineer
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );

        
        newMember.push(engineer);

        // adds engineer id to idArray
        idArray.push(engineer.engineerId);

        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        // prompts questions to user
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
          
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
          
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
          
        },
      ])
      .then((answers) => {
        // creates an intern object from class Engineer
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );

        // adds the intern object to newMember
        newMember.push(intern);

        // adds intern id to idArray
        idArray.push(intern.internId);
        
        createTeam();
      });
  }

  function buildTeam() {

    fs.writeFileSync("./result/team.html", render(newMember), "utf-8");
  }

  addManager();
}

init();
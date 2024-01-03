const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const teamMembers = [];

// Function to prompt user for Manager's information
function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the manager's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the manager's office number:",
    },
  ]);
}

// Function to prompt user for Engineer's information
function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's GitHub username:",
    },
  ]);
}

// Function to prompt user for Intern's information
function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email:",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
    },
  ]);
}

// Function to prompt user to add additional team members
function promptAddMember() {
  return inquirer.prompt({
    type: "list",
    name: "addMember",
    message: "Do you want to add another team member?",
    choices: ["Yes", "No"],
  });
}





// TODO: Write Code to gather information about the development team members, and render the HTML file.


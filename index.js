const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
                message: "Enter team member's name",
                name: "name"
            },
            {
                type: "list",
                message: "Select team member's role",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ],
                name: "role"
            },
            {
                message: "Enter team member's ID",
                name: "ID"
            },
            {
                message: "Enter team member's email address",
                name: "email"
            }
        ])
        .then(function({ name, role, ID, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                        message: `Enter team member's ${roleInfo}`,
                        name: "roleInfo"
                    },
                    {
                        type: "list",
                        message: "Would you like to add more team members?",
                        choices: [
                            "yes",
                            "no"
                        ],
                        name: "moreMembers"
                    }
                ])
                .then(function({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, ID, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, ID, email, roleInfo);
                    } else {
                        newMember = new Manager(name, ID, email, roleInfo);
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function() {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-danger mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Please build your team:");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const ID = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card shadow mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-warning">${name}<br><br>Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${ID}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}" target="_blank">GitHub.com/${gitHub}</a></li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card shadow mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-warning">${name}<br><br>Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${ID}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card shadow mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-warning">${name}<br><br>Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${ID}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Phone: <a href="tel:${officePhone}">${officePhone}</a></li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./index.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });






}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./index.html", html, function(err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("All done!");
}

initApp();
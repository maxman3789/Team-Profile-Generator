const managerName = (team) => {
    const teamManager = (manager) => {
        return `${manager.getName()}`;
    }

    const html = [];

    html.push(
        team
          .filter((employee) => employee.getRole() === "Manager")
          .map((manager) => teamManager(manager))
      );
      return html.join("");
};

const generateTeam = (team) => {
    // HTML for Manager
    const generateManager = (manager) => {
      return `
          <div class="card employee-card col-4">
          <div class="card-header bg-primary text-white">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-user-secret mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
          `;
    };
  
    // Engineers
    const generateEngineer = (engineer) => {
      return `
          <div class="card employee-card col-4">
          <div class="card-header bg-danger text-white">
              <h2 class="card-title">${engineer.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-hard-hat mr-2"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
              </ul>
          </div>
      </div>
          `;
    };
  
    // Interns
    const generateIntern = (intern) => {
      return `
          <div class="card employee-card col-4">
          <div class="card-header bg-warning text-dark">
              <h2 class="card-title">${intern.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-school mr-2"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
          </div>
      </div>
          `;
    };
  
    const html = [];
  
    html.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
  
  // HTML
  module.exports = (team) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 bg-info">
                  <h1 class="text-center">${managerName(team)}'s Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };
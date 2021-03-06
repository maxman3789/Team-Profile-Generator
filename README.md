# Team-Profile-Generator

An app for Creating an HTML page of a Team with options for a Manager, an Engineer, and an Intern. Uses Node.js, Inquirer, and Jest.

Here is a video walkthrough of the process: [Click Here](https://www.youtube.com/embed/Q2s80tO5js8)

Here is another video using npm run test: [Click Here](https://www.youtube.com/watch?v=2RJu7NPm4PI)

The resulting HTML page looks like this:

<img width="1269" alt="Screen Shot 2022-01-27 at 9 53 49 PM" src="https://user-images.githubusercontent.com/96030343/151494853-10ad0c71-3c72-4b24-ad4d-a597283e5f4a.png">


## User Story
    AS A manager
    I WANT to generate a webpage that displays my team's basic info
    SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated


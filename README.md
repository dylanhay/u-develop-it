# U Develop It

## Description
Back end for a voting application, consisting of an Express.js API and a relational database.

## License  
This application is covered under the following license. Please review the link below for additional information pertaining to the license.
    
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)  
https://www.gnu.org/licenses/gpl-3.0

## Table of Contents
[Built With](#built-with)  
[Landing Page](#landing-page)  
[Installation](#installation)   
[Testing](#testing)  
[Contribution](#contribution)  

## Built With
* JavaScript
* Node.js
* Express.js
* MySQL2
* Jest
* Git
* Insomnia

## Installation
To run locally once cloned:
* Enter `npm install` in the CLI to install the required npm packages
* Adjust the password in the `connection.js` file to your unique MySQL password
* Enter `mysql -u root -p` in the CLI and enter your MySQL password to navigate to the MySQL Shell
* Enter `source db/schema.sql` in the MySQL Shell to create the `election` database
* Enter `source db/schema.sql` in the MySQL Shell to add or reset the `election` database tables
* Enter `source db/seeds.sql` in the MySQL Shell to seed the `election` database
* Enter `npm start` in the CLI to launch the server
* Routes can tested and database can be edited via an API development platform such as Insomnia

## Testing
* Enter `npm test` in the CLI to run Jest

## Contribution
Built by Dylan Hay
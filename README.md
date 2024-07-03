
Movie Production Company Database
Overview
This project is designed to facilitate research on movie production companies in the European region. The database documents key information about these companies, including details such as company name, address, organizational type, employee count, net value, and government registration. It also records data on employees, films produced by each company, and financial details such as grants and funding within the film industry. The system is implemented using MySQL, with a front-end interface built using CSS, HTML, Node.js/Express.js, and React.



Features
Documentation of production companies, including financial information and government registration.
Employee categorization into crew and staff, with details about roles and compensation.
Recording of films produced, including details about crew members and their roles.
Tracking of financial grants, including application details and outcomes.
Front-end interface for interacting with the database.

## Database Schema

Below is a high-level overview of the schema:

![schema](https://github.com/HudaAlhadi/filmHub/assets/139655754/dc2592d2-a4c9-4dbd-9c4b-5dba698886ac)


## Tables
companies: Stores details about production companies.

CompanyID: INT, primary key
CompanyName: VARCHAR(100)
Address: VARCHAR(255)
ZipCode: VARCHAR(10)
City: VARCHAR(50)
Nation: VARCHAR(50)
OrganizationType: VARCHAR(50)
NumberOfEmployees: INT
TotalLiabilities: DECIMAL
TotalAssets: DECIMAL
NetValue: DECIMAL
registration_offices: Details about the registration offices.

RegistrationID: INT, primary key
CompanyID: INT, foreign key
OfficeName: VARCHAR(100)
RegistrationDate: DATE
FinancialObligation: DECIMAL
shareholders: Information about shareholders of the companies.

ShareholderID: INT, primary key
CompanyID: INT, foreign key
PlaceOfBirth: VARCHAR(50)
MotherMaidenName: VARCHAR(50)
FatherFirstName: VARCHAR(50)
NationalInsuranceNumber: VARCHAR(50)
PassportNumber: VARCHAR(50)
employees: Details about employees.

EmployeeID: INT, primary key
FirstName: VARCHAR(50)
LastName: VARCHAR(50)
MiddleName: VARCHAR(50)
DateOfBirth: DATE
CommencementDate: DATE
films: Information about films produced by the companies.

FilmID: INT, primary key
MovieCode: VARCHAR(50)
CompanyID: INT, foreign key
Title: VARCHAR(100)
Year: YEAR
FirstReleaseDate: DATE
crew: Details about crew members, including their roles and compensation.

CrewID: INT, primary key
Category: VARCHAR(50)
roles: Roles played by crew members in films.

RoleID: INT, primary key
RoleName: VARCHAR(50)
RoleDescription: VARCHAR(255)
grants: Information about financial grants.

GrantID: INT, primary key
Title: VARCHAR(100)
FundingOrganization: VARCHAR(100)
MaxValue: DECIMAL
Deadline: DATE
grant_applications: Details about grant applications.

ApplicationID: INT, primary key
GrantID: INT, foreign key
ApplicationDate: DATE
DesiredAmount: DECIMAL
Outcome: VARCHAR(50)
Installation Instructions
Prerequisites
Node.js
MySQL

## Clone the repository:

git clone  https://github.com/HudaAlhadi/filmHub.git

## Usage
Backend runs on http://localhost:3003
Frontend runs on http://localhost:3000 

## License
This project is licensed under the MIT License. See the LICENSE file for more details.


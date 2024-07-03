-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2023 at 02:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productioncompanies2`
--

-- --------------------------------------------------------

--
-- Table structure for table `actorcompensation`
--

CREATE TABLE `actorcompensation` (
  `CompensationID` int(11) NOT NULL,
  `EmployeeID` int(11) DEFAULT NULL,
  `HourlyPay` decimal(15,2) DEFAULT NULL,
  `DailyBonus` decimal(15,2) DEFAULT NULL,
  `SceneBonus` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `actorcompensation`
--

INSERT INTO `actorcompensation` (`CompensationID`, `EmployeeID`, `HourlyPay`, `DailyBonus`, `SceneBonus`) VALUES
(1, 1, 25.00, 100.00, 500.00),
(2, 5, 80.00, 54.00, 12.00);

-- --------------------------------------------------------

--
-- Table structure for table `companylocations`
--

CREATE TABLE `companylocations` (
  `companyID` int(11) NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companylocations`
--

INSERT INTO `companylocations` (`companyID`, `zip_code`, `nation`, `city`, `address`) VALUES
(1, '12345', 'USA', 'New York', '123 Main St'),
(2, '54321', 'Canada', 'Toronto', '456 Oak St'),
(3, '98765', 'UK', 'London', '789 Maple St');

-- --------------------------------------------------------

--
-- Table structure for table `crewfilms`
--

CREATE TABLE `crewfilms` (
  `EmployeeID` int(11) NOT NULL,
  `FilmID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crewfilms`
--

INSERT INTO `crewfilms` (`EmployeeID`, `FilmID`) VALUES
(1, 8),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `crewmembers`
--

CREATE TABLE `crewmembers` (
  `EmployeeID` int(11) NOT NULL,
  `Category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crewmembers`
--

INSERT INTO `crewmembers` (`EmployeeID`, `Category`) VALUES
(1, 'Actor'),
(2, 'Director'),
(3, 'Producer'),
(4, 'Producer'),
(5, 'Actor'),
(6, 'Director'),
(7, 'Director');

-- --------------------------------------------------------

--
-- Table structure for table `crewroles`
--

CREATE TABLE `crewroles` (
  `EmployeeID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crewroles`
--

INSERT INTO `crewroles` (`EmployeeID`, `RoleID`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `DepartmentID` int(11) NOT NULL,
  `DepartmentName` varchar(255) DEFAULT NULL,
  `BuildingName` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`DepartmentID`, `DepartmentName`, `BuildingName`, `Address`) VALUES
(1, 'HR', 'Building A', '123 Main Street'),
(2, 'Finance', 'Building B', '456 Oak Avenue'),
(3, 'IT', 'Building C', '789 Elm Boulevard');

-- --------------------------------------------------------

--
-- Table structure for table `directorcompensation`
--

CREATE TABLE `directorcompensation` (
  `CompensationID` int(11) NOT NULL,
  `EmployeeID` int(11) DEFAULT NULL,
  `BonusUponConclusion` decimal(15,2) DEFAULT NULL,
  `HourlyPay` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `directorcompensation`
--

INSERT INTO `directorcompensation` (`CompensationID`, `EmployeeID`, `BonusUponConclusion`, `HourlyPay`) VALUES
(1, 2, 50.00, 80.00),
(2, 6, 60.00, 70.00),
(3, 7, 74.00, 55.00);

-- --------------------------------------------------------

--
-- Table structure for table `employeecontact`
--

CREATE TABLE `employeecontact` (
  `EmployeeID` int(11) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `EmailAddress` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employeecontact`
--

INSERT INTO `employeecontact` (`EmployeeID`, `PhoneNumber`, `Description`, `EmailAddress`) VALUES
(1, '123-456-7890', 'Work Email', 'john.doe@email.com'),
(2, '987-654-3210', 'Personal Email', 'jane.smith@email.com'),
(3, '555-123-4567', 'Alternate Email', 'bob.johnson@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `EmployeeID` int(11) NOT NULL,
  `GivenName` varchar(255) DEFAULT NULL,
  `Surname` varchar(255) DEFAULT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `CommencementDate` date DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `companyID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`EmployeeID`, `GivenName`, `Surname`, `MiddleName`, `DateOfBirth`, `CommencementDate`, `Email`, `companyID`) VALUES
(1, 'John', 'Doe', 'A', '1990-01-01', '2020-05-15', 'john.doe@email.com', 1),
(2, 'Jane', 'Smith', 'B', '1985-02-15', '2018-10-20', 'jane.smith@email.com', 2),
(3, 'Bob', 'Johnson', 'C', '1995-08-10', '2019-03-05', 'bob.johnson@email.com', 3),
(4, 'Huda', 'Ahmed', 'Ilaaa', '0000-00-00', '0000-00-00', NULL, 1),
(5, 'John', 'Doe', 'Pardeep', '1994-12-13', '0000-00-00', 'aha@gmial.com', 2),
(6, 'Inam', 'Hasoon', 'Alaa', '1994-12-13', '0000-00-00', 'h@gmail.com', 3),
(7, 'Noor', 'Costa', 'Kerem', '1994-12-18', '0000-00-00', 'j@gmail.com', 2),
(8, 'Alaa', 'Alisawi', 'Hadi', '1994-12-01', '0000-00-00', 'h@gmail.com', 2);

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `filmID` int(11) NOT NULL,
  `movieCode` varchar(255) DEFAULT NULL,
  `companyID` int(11) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `FirstReleaseDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`filmID`, `movieCode`, `companyID`, `Title`, `Year`, `FirstReleaseDate`) VALUES
(3, '05155889', 3, 'Gone girl', 2000, '1990-01-05'),
(8, '051558', NULL, 'Star War', 2000, '1990-01-05');

-- --------------------------------------------------------

--
-- Table structure for table `financialinformation`
--

CREATE TABLE `financialinformation` (
  `companyID` int(11) NOT NULL,
  `total_liabilities` decimal(15,2) DEFAULT NULL,
  `total_assets` decimal(15,2) DEFAULT NULL,
  `net_value` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `financialinformation`
--

INSERT INTO `financialinformation` (`companyID`, `total_liabilities`, `total_assets`, `net_value`) VALUES
(1, 500.00, 600.00, 100.00),
(2, 900.00, 1000.00, 100.00),
(3, 500.00, 600.00, 100.00);

-- --------------------------------------------------------

--
-- Table structure for table `grantapplications`
--

CREATE TABLE `grantapplications` (
  `ApplicationID` int(11) NOT NULL,
  `ApplicationDate` date DEFAULT NULL,
  `DesiredAmount` decimal(15,2) DEFAULT NULL,
  `Outcome` varchar(255) DEFAULT NULL,
  `GrantID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grantapplications`
--

INSERT INTO `grantapplications` (`ApplicationID`, `ApplicationDate`, `DesiredAmount`, `Outcome`, `GrantID`) VALUES
(1, '2023-01-15', 5000.00, 'successfull', 1),
(2, '2023-02-20', 7500.00, 'unsuccessfull', 2),
(3, '2023-03-25', 10000.00, 'successfull', 3);

-- --------------------------------------------------------

--
-- Table structure for table `grantcompanies`
--

CREATE TABLE `grantcompanies` (
  `GrantID` int(11) NOT NULL,
  `CompanyID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `grants`
--

CREATE TABLE `grants` (
  `GrantID` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `FundingOrganization` varchar(255) DEFAULT NULL,
  `MaximumValue` decimal(15,2) DEFAULT NULL,
  `Deadline` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grants`
--

INSERT INTO `grants` (`GrantID`, `Title`, `FundingOrganization`, `MaximumValue`, `Deadline`) VALUES
(1, 'Government Grants', 'UK gov', NULL, '2023-05-02'),
(2, 'Private Foundations', 'Redileon', NULL, '2025-02-05'),
(3, 'Grant3', 'Organization3', 100000.00, '2023-03-31');

-- --------------------------------------------------------

--
-- Table structure for table `producercompensation`
--

CREATE TABLE `producercompensation` (
  `CompensationID` int(11) NOT NULL,
  `EmployeeID` int(11) DEFAULT NULL,
  `BonusUponConclusion` decimal(15,2) DEFAULT NULL,
  `HourlyPay` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `producercompensation`
--

INSERT INTO `producercompensation` (`CompensationID`, `EmployeeID`, `BonusUponConclusion`, `HourlyPay`) VALUES
(1, 3, 12.00, 50.00),
(2, 4, 80.00, 88.00);

-- --------------------------------------------------------

--
-- Table structure for table `productioncompanies`
--

CREATE TABLE `productioncompanies` (
  `companyID` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `organization_type` varchar(255) DEFAULT NULL,
  `number_of_employees` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productioncompanies`
--

INSERT INTO `productioncompanies` (`companyID`, `name`, `organization_type`, `number_of_employees`) VALUES
(1, 'Cors media', 'Profit', 50),
(2, 'Lamp', 'Non profit', 80),
(3, 'UK media', 'Profit', 90);

-- --------------------------------------------------------

--
-- Table structure for table `registrationoffices`
--

CREATE TABLE `registrationoffices` (
  `RegistrationID` int(11) NOT NULL,
  `CompanyID` int(11) DEFAULT NULL,
  `OfficeName` varchar(255) DEFAULT NULL,
  `RegistrationDate` date DEFAULT NULL,
  `FinancialObligation` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registrationoffices`
--

INSERT INTO `registrationoffices` (`RegistrationID`, `CompanyID`, `OfficeName`, `RegistrationDate`, `FinancialObligation`) VALUES
(1, 1, 'Main Office', '2022-01-01', 50000.00),
(2, 2, 'Branch Office', '2022-02-15', 75000.00),
(3, 3, 'Regional Office', '2022-03-10', 100000.00);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(255) DEFAULT NULL,
  `RoleDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`RoleID`, `RoleName`, `RoleDescription`) VALUES
(1, 'Cameo', 'Main Character'),
(2, 'protagonist', ''),
(3, 'protagonist', '');

-- --------------------------------------------------------

--
-- Table structure for table `shareholders`
--

CREATE TABLE `shareholders` (
  `companyID` int(11) DEFAULT NULL,
  `NationalInsuranceNumber` varchar(20) NOT NULL,
  `PlaceOfBirth` varchar(255) DEFAULT NULL,
  `MotherMaidenName` varchar(255) DEFAULT NULL,
  `FatherFirstName` varchar(255) DEFAULT NULL,
  `PersonalPhoneNumber` varchar(20) DEFAULT NULL,
  `PassportNumber` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shareholders`
--

INSERT INTO `shareholders` (`companyID`, `NationalInsuranceNumber`, `PlaceOfBirth`, `MotherMaidenName`, `FatherFirstName`, `PersonalPhoneNumber`, `PassportNumber`) VALUES
(1, '123-45-6789', 'London', 'Inma', 'Ali', '123-456-7890', 'AB123456'),
(1, '54444444444', 'paris', 'reem', 'john', '0587458', 'A158525'),
(1, '98888888888', 'paris', 'reem', 'john', '0587458', 'A158525');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `WorkingHoursPerDay` decimal(10,2) DEFAULT NULL,
  `HourlyPay` decimal(10,2) DEFAULT NULL,
  `MonthlyWage` int(11) DEFAULT NULL,
  `DepartmentID` int(11) DEFAULT NULL,
  `EmployeeID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`WorkingHoursPerDay`, `HourlyPay`, `MonthlyWage`, `DepartmentID`, `EmployeeID`) VALUES
(80.00, 50.00, 5000, 3, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actorcompensation`
--
ALTER TABLE `actorcompensation`
  ADD PRIMARY KEY (`CompensationID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `companylocations`
--
ALTER TABLE `companylocations`
  ADD PRIMARY KEY (`companyID`,`zip_code`);

--
-- Indexes for table `crewfilms`
--
ALTER TABLE `crewfilms`
  ADD PRIMARY KEY (`EmployeeID`,`FilmID`),
  ADD KEY `FilmID` (`FilmID`);

--
-- Indexes for table `crewmembers`
--
ALTER TABLE `crewmembers`
  ADD PRIMARY KEY (`EmployeeID`);

--
-- Indexes for table `crewroles`
--
ALTER TABLE `crewroles`
  ADD PRIMARY KEY (`EmployeeID`,`RoleID`),
  ADD KEY `RoleID` (`RoleID`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`DepartmentID`);

--
-- Indexes for table `directorcompensation`
--
ALTER TABLE `directorcompensation`
  ADD PRIMARY KEY (`CompensationID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `employeecontact`
--
ALTER TABLE `employeecontact`
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`EmployeeID`),
  ADD KEY `companyID` (`companyID`);

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`filmID`),
  ADD UNIQUE KEY `movieCode` (`movieCode`),
  ADD KEY `companyID` (`companyID`);

--
-- Indexes for table `financialinformation`
--
ALTER TABLE `financialinformation`
  ADD PRIMARY KEY (`companyID`);

--
-- Indexes for table `grantapplications`
--
ALTER TABLE `grantapplications`
  ADD PRIMARY KEY (`ApplicationID`),
  ADD KEY `GrantID` (`GrantID`);

--
-- Indexes for table `grantcompanies`
--
ALTER TABLE `grantcompanies`
  ADD PRIMARY KEY (`GrantID`,`CompanyID`),
  ADD KEY `CompanyID` (`CompanyID`);

--
-- Indexes for table `grants`
--
ALTER TABLE `grants`
  ADD PRIMARY KEY (`GrantID`);

--
-- Indexes for table `producercompensation`
--
ALTER TABLE `producercompensation`
  ADD PRIMARY KEY (`CompensationID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `productioncompanies`
--
ALTER TABLE `productioncompanies`
  ADD PRIMARY KEY (`companyID`);

--
-- Indexes for table `registrationoffices`
--
ALTER TABLE `registrationoffices`
  ADD PRIMARY KEY (`RegistrationID`),
  ADD KEY `CompanyID` (`CompanyID`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RoleID`);

--
-- Indexes for table `shareholders`
--
ALTER TABLE `shareholders`
  ADD PRIMARY KEY (`NationalInsuranceNumber`),
  ADD KEY `companyID` (`companyID`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD KEY `fk_department` (`DepartmentID`),
  ADD KEY `fk_employee` (`EmployeeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `DepartmentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `filmID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `grantapplications`
--
ALTER TABLE `grantapplications`
  MODIFY `ApplicationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `grants`
--
ALTER TABLE `grants`
  MODIFY `GrantID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `productioncompanies`
--
ALTER TABLE `productioncompanies`
  MODIFY `companyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `registrationoffices`
--
ALTER TABLE `registrationoffices`
  MODIFY `RegistrationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actorcompensation`
--
ALTER TABLE `actorcompensation`
  ADD CONSTRAINT `actorcompensation_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `companylocations`
--
ALTER TABLE `companylocations`
  ADD CONSTRAINT `companylocations_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `productioncompanies` (`companyID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `crewfilms`
--
ALTER TABLE `crewfilms`
  ADD CONSTRAINT `crewfilms_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `crewmembers` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `crewfilms_ibfk_2` FOREIGN KEY (`FilmID`) REFERENCES `films` (`filmID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `crewmembers`
--
ALTER TABLE `crewmembers`
  ADD CONSTRAINT `crewmembers_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `crewroles`
--
ALTER TABLE `crewroles`
  ADD CONSTRAINT `crewroles_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `crewroles_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `roles` (`RoleID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `directorcompensation`
--
ALTER TABLE `directorcompensation`
  ADD CONSTRAINT `directorcompensation_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employeecontact`
--
ALTER TABLE `employeecontact`
  ADD CONSTRAINT `employeecontact_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`);

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `productioncompanies` (`companyID`);

--
-- Constraints for table `films`
--
ALTER TABLE `films`
  ADD CONSTRAINT `films_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `productioncompanies` (`companyID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `financialinformation`
--
ALTER TABLE `financialinformation`
  ADD CONSTRAINT `financialinformation_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `productioncompanies` (`companyID`);

--
-- Constraints for table `grantapplications`
--
ALTER TABLE `grantapplications`
  ADD CONSTRAINT `grantapplications_ibfk_1` FOREIGN KEY (`GrantID`) REFERENCES `grants` (`GrantID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `grantcompanies`
--
ALTER TABLE `grantcompanies`
  ADD CONSTRAINT `grantcompanies_ibfk_1` FOREIGN KEY (`GrantID`) REFERENCES `grants` (`GrantID`),
  ADD CONSTRAINT `grantcompanies_ibfk_2` FOREIGN KEY (`CompanyID`) REFERENCES `productioncompanies` (`companyID`);

--
-- Constraints for table `producercompensation`
--
ALTER TABLE `producercompensation`
  ADD CONSTRAINT `producercompensation_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `registrationoffices`
--
ALTER TABLE `registrationoffices`
  ADD CONSTRAINT `registrationoffices_ibfk_1` FOREIGN KEY (`CompanyID`) REFERENCES `productioncompanies` (`companyID`);

--
-- Constraints for table `shareholders`
--
ALTER TABLE `shareholders`
  ADD CONSTRAINT `shareholders_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `productioncompanies` (`companyID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `fk_department` FOREIGN KEY (`DepartmentID`) REFERENCES `departments` (`DepartmentID`),
  ADD CONSTRAINT `fk_employee` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

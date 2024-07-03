const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "productioncompanies2",
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0  
});  
app.get('/', (req, res) =>  {
  console.log(res) 
   pool.query('SELECT * FROM productioncompanies', (error, results, fields) => {
     if (error) {
       console.error('Error executing query:', error);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     } 
     res.json(results);
   })
 });

 app.get('/companylocations', (req, res) => {
  pool.query('SELECT * FROM companylocations', (error, results, fields) => {
    if (error) {
      console.error('Error executing companylocations query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.get('/companyfinancial', (req, res) => {
  pool.query('SELECT * FROM  financialinformation', (error, results, fields) => {
    if (error) {
      console.error('Error executing financialinformation query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});


app.put('/companies/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.body.companyID
  
  const values= [req.body.name, req.body.organizationType, req.body.numberOfEmployees, id]

  pool.query('UPDATE productioncompanies SET name= ?, organization_type=?, number_of_employees=? WHERE companyID=?', values , (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    } 
 res.json(results); 
  });
});
app.post('/addcompany', (req, res) => {
  console.log('Received data:', req.body);

  const companyValues = [req.body.name, req.body.organizationType, req.body.numberOfEmployees];
   
  pool.query(
    'INSERT INTO productioncompanies (name, organization_type, number_of_employees) VALUES (?, ?, ?)',
    companyValues,
    (error, results, fields) => {
      if (error) { 
        console.error('Error executing company query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      } 

   
      const companyID = results.insertId;

  
      const locationValues = [companyID, req.body.zip_code, req.body.city, req.body.nation, req.body.address];

      pool.query(
        'INSERT INTO companylocations (companyID, zip_code, city, nation, address) VALUES (?, ?, ?, ?, ?)',
        locationValues,
        (errorLocation, resultsLocation, fieldsLocation) => {
          if (errorLocation) {
            console.error('Error executing location query:', errorLocation);
            res.status(500).json({ error: 'Internal Server Error' });
            return;   
          }  
 
          res.json({ companyID, locationId: resultsLocation.insertId });
        }
      );
      const financial = [req.body.totalLiabilties, req.body.totalAssets, req.body.NetValue];
      pool.query(
        'INSERT INTO  financialinformation (totalLiabilities, totalAssets, NetValue) VALUES (?, ?, ?)',
       financial,
        (errorLocation, resultsLocation, fieldsLocation) => {
          if (errorLocation) { 
            console.error('Error executing location query:', errorLocation);
            res.status(500).json({ error: 'Internal Server Error' });
            return;  
          }  

          res.json({ companyID, locationId: resultsLocation.insertId });
        }
      );
    }
  );
});

app.get('/employees/:ID', (req, res) => {
  const companyId = req.params.ID;
  pool.query('SELECT EmployeeID, GivenName, Surname, MiddleName, DateOfBirth, CommencementDate FROM employees WHERE companyID=?', [companyId], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
}); 

app.get('/company/:ID', (req, res) => {
  console.log(res)
  const companyId = req.params.ID;
   pool.query('SELECT GivenName, Surname, MiddleName, DateOfBirth, CommencementDate FROM employees WHERE companyID=?', [companyId], (error, results, fields) => {
     if (error) {
       console.error('Error executing query:', error);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     }
     res.json(results);
   })
 });
 app.delete('/comp/:id', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.id; 
  pool.query('DELETE FROM productioncompanies WHERE companyID=?', id ,(error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});
app.post('/AddEmp/:ID', (req, res) => {
  console.log('Received data:', req.body);
const id= req.params.ID
  const values= [id, req.body.GivenName, req.body.Surname, req.body.MiddleName, req.body.DateOfBirth,req.body.CommencementDate]
  pool.query('INSERT INTO employees (companyID, GivenName, Surname, MiddleName, DateOfBirth, CommencementDate) VALUES(?,?,?,?,?,?)', values ,(error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.put('/employee/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.body.EmployeeID
  const values= [req.body.GivenName, req.body.Surname, req.body.MiddleName, req.body.DateOfBirth,req.body.CommencementDate,id]

  pool.query('UPDATE employees SET GivenName= ?, Surname=?, MiddleName=?, DateOfBirth=?, CommencementDate=? WHERE EmployeeID=?',values , (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
 res.json(results);
  });
});

app.delete('/Emp/:id', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.id; 

  
  pool.query('DELETE FROM employees WHERE EmployeeID=?', id ,(error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});
app.get('/shareholderss/:ID', (req, res) => {
  console.log(res)
  const companyId = req.params.ID;
   pool.query('SELECT NationalInsuranceNumber, PlaceOfBirth,MotherMaidenName, FatherFirstName, PersonalPhoneNumber, PassportNumber FROM shareholders WHERE companyID=?', [companyId], (error, results, fields) => {
     if (error) {
       console.error('Error executing query:', error);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     }
     res.json(results);
   })
 });
 app.get('/grant', (req, res) => {

   pool.query('SELECT grantID, title, fundingOrganization,MaximumValue, Deadline FROM grants ', (error, results, fields) => {
     if (error) {
       console.error('Error executing query:', error);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     }
     res.json(results);
   })
 });
 app.get('/grantapplication/:ID', (req, res) => {
const grantID= req.params.ID
console.log(grantID)
  pool.query('SELECT grantapplications.applicationDate,grantapplications.desiredAmount,grantapplications.outcome FROM grantapplications JOIN grants ON grants.grantID=grantapplications.grantID WHERE grants.grantID=?', [grantID], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  })
});
app.put('/grants/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.body.grantID
  const values= [req.body.title, req.body.fundingOrganization, req.body.MaximumValue, req.body.Deadline, id]

  pool.query('UPDATE grants SET title=?, fundingOrganization=?, MaximumValue=?, Deadline=? WHERE grantID=?',values, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
 res.json(results); 
  }); 
});
app.delete('/grantt/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.ID
  const values= [id]

  pool.query('DELETE FROM grants WHERE grantID=?',values, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
 res.json(results); 
  });
});
app.post('/grants', function (req, res) {
    console.log('Received data:', req.body);

    const values = [req.body.title, req.body.fundingOrganization, req.body.MaximumValue, req.body.Deadline];

    pool.query('INSERT INTO grants( title, fundingOrganization,MaximumValue, Deadline) values(?,?,?,?)', values, (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });
app.delete('/shareholder/:id', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.id; 

  const values = [id]
  pool.query('DELETE FROM shareholders WHERE companyID=?', values ,(error, results, fields) => {
    if (error) { 
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  }); 
});
 
app.post('/shareholders/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id= req.params.ID 
  console.log(id)
  const values= [id, req.body.NationalInsuranceNumber, req.body.PlaceOfBirth, req.body.MotherMaidenName, req.body.FatherFirstName,req.body.PersonalPhoneNumber, req.body.PassportNumber]
  pool.query('INSERT INTO shareholders ( companyID, NationalInsuranceNumber, PlaceOfBirth,MotherMaidenName, FatherFirstName, PersonalPhoneNumber, PassportNumber) VALUES(?,?,?,?,?,?,?)', values ,(error, results, fields) => {
    if (error) { 
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results); 
  });
}); 
app.put('/shareholders/update/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.ID; // Assuming the companyID is part of the route parameters
  console.log(id);

  const values = [
    req.body.NationalInsuranceNumber,
    req.body.PlaceOfBirth,
    req.body.MotherMaidenName,
    req.body.FatherFirstName,
    req.body.PersonalPhoneNumber,
    req.body.PassportNumber,
    id,
  ];

  pool.query(
    'UPDATE shareholders SET ' +
      'NationalInsuranceNumber = ?, ' +
      'PlaceOfBirth = ?, ' +
      'MotherMaidenName = ?, ' +
      'FatherFirstName = ?, ' +
      'PersonalPhoneNumber = ?, ' +
      'PassportNumber = ? WHERE companyID = ?',
    values,
    (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    } 
  );
});
app.get('/films', (req, res) => {
  console.log(res)
   pool.query('SELECT * FROM films', (error, results, fields) => {
     if (error) {
       console.error('Error executing query:', error);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     }
     res.json(results);
   })
 });
 app.post('/Addfilm', (req, res) => {
  console.log('Received data:', req.body);

  const values= [req.body.movieCode, req.body.Title, req.body.Year, req.body.FirstReleaseDate]
  pool.query('INSERT INTO films (movieCode, Title,Year, FirstReleaseDate) VALUES(?,?,?,?)', values ,(error, results, fields) => { 
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.delete('/film/:id', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.id; 

  const values = [id]
  pool.query('DELETE FROM films WHERE FilmID=?', values ,(error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});
app.put('/films/update/:ID', (req, res) => {
  console.log('Received data:', req.body);
  const id = req.params.ID;
  console.log(id)
  const values = [
    req.body.movieCode, 
    req.body.Title, 
    parseInt(req.body.Year), 
    new Date(req.body.FirstReleaseDate),  
    id 
  ];

  pool.query('UPDATE films SET movieCode=?, Title=?, Year=?, FirstReleaseDate=? WHERE FilmID=?', values, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.get('/films/detail/:ID', (req, res) => {
  const filmID = req.params.ID;

  pool.query(
    'SELECT films.Title, ' +
    'crewmembers.Category AS CrewMemberCategory, ' +
    'roles.RoleName AS RoleName, ' +
    'roles.RoleDescription AS RoleDescription ' +
    'FROM films ' +
    'JOIN crewfilms ON films.FilmID = crewfilms.filmID ' +
    'JOIN crewmembers ON crewfilms.EmployeeID = crewmembers.EmployeeID ' +
    'JOIN crewroles ON crewmembers.EmployeeID= crewroles.EmployeeID ' +
    'JOIN roles ON crewroles.roleID = roles.roleID ' +
    'WHERE films.filmID = ?',
    [filmID],
    (error, results) => { 
      if (error) {
        console.error('Error fetching film details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    }
  );
});
app.get('/compensation/:ID', (req, res) => {
  const employeeId = req.params.ID;
console.log(employeeId)
  // Execute a query to get the category of the crew member or staff
  const query = 'SELECT category FROM crewmembers WHERE EmployeeID = ?';
  pool.query(query, [employeeId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      // Check if it's a staff member
      const staffQuery = 'SELECT * FROM staff WHERE EmployeeID= ?';
      pool.query(staffQuery, [employeeId], (staffErr, staffResults) => {
        if (staffErr) {
          console.error(staffErr);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (staffResults.length === 0) {
          return res.status(404).json({ error: 'Employee not found' });
        }

        // Staff member found, return staff compensation
        const staffCompensationQuery = 'SELECT * FROM staff WHERE EmployeeID= ?';
        pool.query(staffCompensationQuery, [employeeId], (compErr, compResults) => {
          if (compErr) {
            console.error(compErr);
            return res.status(500).json({ error: 'Internal Server Error' });
          }

          res.status(200).json( compResults );
        });
      });
    } else {
      // Crew member found, determine the category
      const category = results[0].category;

      // Determine the compensation table based on the category
      let compensationTable;
      switch (category) {
        case 'Actor':
          compensationTable = 'actorcompensation';
          break;
        case 'Director':
          compensationTable = 'directorcompensation';
          break;
        case 'Producer':
          compensationTable = 'producercompensation';
          break;
        default:
          return res.status(400).json({ error: 'Invalid category' });
      }

      // Query the compensation table
      const compensationQuery = `SELECT * FROM ${compensationTable} WHERE EmployeeID = ?`;
      pool.query(compensationQuery, [employeeId], (compErr, compResults) => {
        if (compErr) {
          console.error(compErr);
          return res.status(500).json({ error: 'Internal Server Error' });
        } 

        res.status(200).json( compResults );
      });
    }
  }); 
});

const port = 3003
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

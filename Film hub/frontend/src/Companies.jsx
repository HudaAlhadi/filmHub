import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Overlay from './Overlay';
import './Companies.css';


const Companies = () => {
  const [list, setList] = useState([]);
  const [locations, setLocations] = useState([]);
  const [financial, setfinancial] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companiesResponse = await fetch('http://localhost:3003/');
        const companyLocationsResponse = await fetch('http://localhost:3003/companylocations');
        const companyFinancial= await fetch ('http://localhost:3003/companyfinancial')
        const res = await companiesResponse.json();
        const res1 = await companyLocationsResponse.json();
        const res3= await companyFinancial.json()
        console.log(res)
setfinancial(res3)
        setList(res);
        setLocations(res1);
        
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handledeletion = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/comp/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
console.log(financial)
  return (
    <Overlay>
      <h3>Production companies</h3>
      <Link to='/addcompany'>
        <button className='Add'>Add</button>
      </Link>
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Organization type</th>
              <th>Number of Employees</th>
  
              <th>Address</th>
              <th>Zip Code</th>
              <th>City</th>
              <th>Nation</th>
              <th>Total Liabilities</th>
              <th>Total Assets</th>
              <th>Net value</th>
              <th>Actions</th>
              <th>Employees</th>
         
            </tr>
          </thead>
          <tbody>
            {list.map((company,  index) => (
              <tr key={company.companyID}>
                <td>{company.name}</td>
                <td>{company.organization_type}</td>
                <td>{company.number_of_employees}</td>
             
                <td>{locations[index]?.address}</td>
                <td>{locations[index]?.zip_code}</td>
                <td>{locations[index]?.city}</td>
                <td>{locations[index]?.nation}</td>
                <td>{financial[index]?.total_liabilities}</td>
                <td>{financial[index]?.total_assets}</td>
                <td>{financial[index]?.net_value}</td>
                <td className='btn'>
                  <div className='btns'>
                    <Link to={`/companies/${company.companyID}`}>
                      <button className='Update'>Update</button>
                    </Link>
                    <button className='Delete' onClick={() => handledeletion(company.companyID)}>
                      Delete
                    </button>
                    </div>
                    </td>
                <td> 
                    <Link to={`/employees/${company.companyID}`}>
                      <button className='UpdateButton '>Employees</button>
                    </Link>
                    </td>

                <td> 
                    <Link to={`/companiess/${company.companyID}`}>
                      <button className='UpdateButton'>Shareholders</button>
                    </Link></td>
         
          
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </Overlay>
  );
};

export default Companies;

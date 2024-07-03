import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Overlay from './Overlay';
import './Companies.css';
import Employees from './Employees';

const Grant = () => {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchgrants = async () => {
      try {
        const grantsResponse = await fetch(`http://localhost:3003/grant`);
       
        const res = await grantsResponse.json();
        
        setList(res);

   
      } catch (error) {
        console.error('Error fetching grants:', error);
      }
    };

    fetchgrants();
  }, []);
  
  const handledeletion = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/grantt/${id}`, {
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
console.log(list)
console.log(list)
  return (
    <Overlay>
      <h3>Grants</h3>
      <Link to='/addgrant'>
        <button className='Add'>Add</button>
      </Link>
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Funding Organization </th>
            
              <th>Maximum value</th>
              <th>Submission Deadline</th>
              <th>Actions</th>
            
            </tr>
          </thead>
          <tbody>
            {list.map((grant,  index) => (
              <tr key={grant.grantID}>
                <td>{grant.title}</td>
                <td>{grant.fundingOrganization}</td>
                <td>{grant.MaximumValue}</td>
                <td>{grant.Deadline}</td>
              
             
                <td className='btn'>
                  <div className='btns'>
                    <Link to={`/grants/${grant.grantID}`}>
                      <button className='Update'>Update</button>
                    </Link>
                    <button className='Delete' onClick={() => handledeletion(grant.grantID)}>
                      Delete
                    </button>
                    <Link to={`/grantapplication/${grant.grantID}`}>
                      <button className='detail'>Grant Application</button>
                    </Link>
                 
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </Overlay>
  );
};

export default Grant;

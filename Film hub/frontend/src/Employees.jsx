import './Employees.css'
import Overlay from "./Overlay"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Employees = (props) => {
  const [list, setlist] = useState([]);
  const navigate = useNavigate();
  const { ID } = useParams();
  console.log(ID)
  useEffect(() => {
    const fetchemployees = async () => {
      try {
        const employees = await fetch(`http://localhost:3003/employees/${ID}`);

        const res = await employees.json();
        setlist(res);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchemployees();
  }, []);

  const handledeletion = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/Emp/${id}`, {
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

  console.log(list);

  return (
    <Overlay>
      <h3>Employees List</h3>
      <Link to={`/AddEmp/${ID}`}><button className='Add'>Add</button></Link>
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>Given Name</th>
              <th> SurName</th>
              <th>MiddleName</th>
              <th>Date of Birth</th>
      
              <th>Commencement Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((emp) => (
              <tr key={emp.EmployeeID}>
                <td>{emp.GivenName}</td>
                <td>{emp.Surname}</td>
                <td>{emp.MiddleName}</td>
                <td>{emp.DateOfBirth}</td>
             
                <td>{emp.CommencementDate}</td>
                <td className='btn'>
                <Link to={`/employee/${emp.EmployeeID}`}>
                      <button className='Update'>Update</button>
                    </Link> </td>
                <td className='btn'>
                  <div className='btns'>
                   
                    <button className='Delete' onClick={() => handledeletion(emp.EmployeeID)}>Delete</button>
                  </div>
                </td>
                <Link to={`/employee/compensation/${emp.EmployeeID}`}>
                      <button className='Update'>Compensation</button>
                    </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Overlay>
  );
};

export default Employees;

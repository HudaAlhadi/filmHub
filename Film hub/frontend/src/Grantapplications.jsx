import './Employees.css'
import Overlay from "./Overlay"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const GrantApplications = (props) => {
  const [list, setlist] = useState([]);
  const navigate = useNavigate();
  const { ID } = useParams();
  console.log(ID)
  useEffect(() => {
    const fetchapplications = async () => {
      try {
        const applications = await fetch(`http://localhost:3003/grantapplication/${ID}`);

        const res = await applications.json();
        setlist(res);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchapplications();
  }, []);
console.log(list)
  const handleSubmit = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/${id}`, {
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


  return (
    <Overlay>
      <h3>Grant Applications</h3>
      <Link to='/form'><button className='Add'>Add</button></Link>
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>Application Date</th>
              <th>Desired Amount</th>
              <th>Outcome</th>
     
            </tr>
          </thead>
          <tbody>
            {list.map((app) => (
              <tr key={app.ApplicationID}>
                <td>{app.applicationDate}</td>
                <td>{app.desiredAmount}</td>
                <td>{app.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Overlay>
  );
};

export default GrantApplications;

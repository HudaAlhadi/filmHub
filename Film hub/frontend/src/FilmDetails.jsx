import './Employees.css'
import Overlay from "./Overlay"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const FilmDetails = (props) => {
  const [list, setlist] = useState([]);
  const navigate = useNavigate();
  const { ID } = useParams();
  console.log(ID)
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetch(`http://localhost:3003/films/detail/${ID}`);
        const res = await details.json();
        console.log('Response Data:', res); // Add this line
        setlist(res);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
    fetchDetails();
  }, []);
  console.log(list)
  return (
    <Overlay>

     
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>Film Title</th>
              <th> Crew Member Category</th>
              <th>Role Name</th>
              <th>Role Description</th>
           
            </tr>
          </thead>
          <tbody>
            {list.map((emp) => (
              <tr >
                <td>{emp.Title}</td>
                <td>{emp.CrewMemberCategory}</td>
                <td>{emp.RoleName}</td>
                <td>{emp.RoleDescription}</td>
                
             
            
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </Overlay>
  );
};

export default FilmDetails;

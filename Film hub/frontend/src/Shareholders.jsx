import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Overlay from './Overlay';
import './Companies.css';
import { useParams } from 'react-router-dom';
const Shareholders= () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { ID } = useParams();
  console.log(ID)
  useEffect(() => {
    const fetchshareholders = async () => {
      try {
        const shareholdersResponse = await fetch(`http://localhost:3003/shareholderss/${ID}`);
        ;
        const res = await shareholdersResponse.json();
        setList(res);
   
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchshareholders();
  }, []);
  const handleshareholderDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/shareholder/${id}`, {
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

  return (
    <Overlay>
      <h3>Shareholders</h3>
      <Link to={`/addshare/${ID}`}>
        <button className='Add'>Add</button>
      </Link>
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>National Insurance</th>
              <th>Place of birth</th>
              <th>Mother Name</th>
              <th>Father Name</th>
              <th>Phone Number</th>
              <th>Passport Number</th>
              <th>Actions</th>
        
            </tr>
          </thead>
          <tbody>
            {list.map((shareholder,  index) => (
              <tr key={shareholder.companyID}>
                <td>{shareholder.NationalInsuranceNumber}</td>
                <td>{shareholder.PlaceOfBirth}</td>
                <td>{shareholder.MotherMaidenName}</td>
                <td>{shareholder.FatherFirstName}</td>
                <td>{shareholder.PersonalPhoneNumber}</td>
                <td>{shareholder.PassportNumber}</td>
                <td className='btn'>
                  <div className='btns'>
                    <Link to={`/shareholders/update/${index+1}`}>
                      <button className='Update'>Update</button>
                    </Link>
                    <button className='Delete' onClick={() => handleshareholderDelete(shareholder.companyID)}>
                      Delete
                    </button>
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

export default  Shareholders;

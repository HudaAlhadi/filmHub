import { Link, useParams } from "react-router-dom";
import Overlay from "./Overlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateEmployee= (props)=>{


    const [GivenName, setName] = useState('');
    const [Surname, setsurname] = useState('');
    const [Email, setemail] = useState('');
    const [DateOfBirth, setDOB] = useState('');
    const [CommencementDate, setDate] = useState('');
    const [MiddleName, setMname] = useState('');
    const navigate = useNavigate();  
    const params= useParams()
    const id= params.ID
   
         
        const handleSubmit = async () => {
            try {
              const response = await fetch(`http://localhost:3003/employee/${id}`, {
                method: 'put',
                body: JSON.stringify({
                  GivenName: GivenName,
                  Surname: Surname,
                  MiddleName: MiddleName,  
                  DateOfBirth: DateOfBirth,  
                  CommencementDate: CommencementDate,  
                  Email: Email,
                  EmployeeID: id,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
          
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              const responseData = await response.json();
              console.log('Update Response:', responseData);
          
             
            } catch (error) {
              console.error('Error updating employee:', error);
            }
          };
          
return (
    <Overlay>
        <h3> Update Employee </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName">Given Name:</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" id="firstName" name="GivenName" placeholder="Enter your surname" required />
            <label htmlFor="Surname">Surname:</label>
            <input onChange={(e) => { setsurname(e.target.value) }} type="text" id="Email" name="Email" placeholder="Enter your email" required />
            <label htmlFor="Surname">Email:</label>
            <input onChange={(e) => { setemail(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">Date Of Birth:</label>
            <input onChange={(e) => { setDOB(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter commencement date" required />
            <label htmlFor="Surname">Commencement Date:</label>
            <input onChange={(e) => { setDate(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter middle name" required />
            <label htmlFor="Surname">Middle Name:</label>
            <input onChange={(e) => { setMname(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            
             <button type="submit">Update</button>
             <Link to='/'> <button type="submit">Back home</button></Link>
        </form>
    </Overlay>
);}
export default UpdateEmployee
import Overlay from "./Overlay";
import './AddEmployee.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";


const AddEmployee = () => {
    const [GivenName, setName] = useState('');
    const [Surname, setsurname] = useState('');

    const [DateOfBirth, setDOB] = useState('');
    const [CommencementDate, setDate] = useState('');
    const [MiddleName, setMname] = useState('');
    const navigate = useNavigate();  
    const { ID } = useParams();
    console.log(ID)
    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3003/AddEmp/${ID}`, {
                method: 'post',
                body: JSON.stringify({
                    GivenName: GivenName,
                    Surname: Surname,
                    MiddleName: MiddleName,  
                    DateOfBirth: DateOfBirth,  
                    CommencementDate: CommencementDate,  
                  
                 
                  }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate('/form');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Overlay>
        <h3> Add Employee </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName">Given Name:</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" id="firstName" name="GivenName" placeholder="Enter your first name" required />
            <label htmlFor="Surname">Surname:</label>
            <input onChange={(e) => { setsurname(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
      
            <label htmlFor="Surname">Date Of Birth:</label>
            <input onChange={(e) => { setDOB(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">Commencement Date:</label>
            <input onChange={(e) => { setDate(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">Middle Name:</label>
            <input onChange={(e) => { setMname(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            
             <button className="add" type="submit">Add</button>
             <Link to='/'> <button type="submit">Back home</button></Link>
        </form>
    </Overlay>
);}
 
export default  AddEmployee;

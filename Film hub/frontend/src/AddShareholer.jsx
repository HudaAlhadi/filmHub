import Overlay from "./Overlay";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddShareholders= () => {
    const [NI, setNI] = useState('');
    const [Place, setPlace] = useState('');
    const [MotherName, setName] = useState('');
    const [Fathername, setFatherName] = useState('');
    const [PhoneNumber, setPhone] = useState('');
    const [Passport, setPassport] = useState('');

    const navigate = useNavigate();  
    const params=useParams()
const{ID}= params
console.log(ID)
    const handleSubmit = async () => {
        try {
          
      
            // Update the shareholder using the provided companyID (ID)
            const updateResponse = await fetch(`http://localhost:3003/shareholders/${ID}`, {
              method: 'post',
              body: JSON.stringify({
                NationalInsuranceNumber: NI,
                PlaceOfBirth: Place,
                MotherMaidenName: MotherName,
                FatherFirstName: Fathername,
                PassportNumber: Passport,
PersonalPhoneNumber: PhoneNumber,
                
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            if (!updateResponse.ok) {
              throw new Error('Network response was not ok');
            }
      
            console.log('Shareholder updated successfully');
      
            // Redirect or perform any other action after the form submission
            navigate('/form');
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
        console.log(NI)
    return (
        <Overlay>
            <h3> Add Shareholder</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="GivenName"> NationalInsuranceNumber:</label>
                <input onChange={(e) => { setNI(e.target.value) }} type="number" id="NI" name="NI" placeholder="Enter NI" required />

                <label htmlFor="Surname">PlaceOfBirth:</label>
                <input onChange={(e) => { setPlace(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter Place of birth" required />
                <label htmlFor="Surname">MotherMaidenName:</label>
                <input onChange={(e) => { setName(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter Mother name" required />
                <label htmlFor="Surname">FatherFirstName:</label>
                <input onChange={(e) => { setFatherName(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter Father name" required />
                <label htmlFor="Surname">PersonalPhoneNumber:</label>
                <input onChange={(e) => { setPhone(e.target.value) }} type="text" id="SurName" name="personal" placeholder="Enter your last name" required />
                <label htmlFor="Surname">PassportNumber:</label>
                <input onChange={(e) => { setPassport(e.target.value) }} type="text" id="number" name="Surname" placeholder="Enter Passport Number" required />
                
                <button type="submit">Add</button>
              
                <Link to='/'> <button type="submit">Back home</button></Link>
            
            </form>
        </Overlay>
    );
};

export default AddShareholders;

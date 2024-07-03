import { Link, useParams } from "react-router-dom";
import Overlay from "./Overlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGrant= (props)=>{

  
  
    const [title, setTitle] = useState('');
    const [fundingOrganization, setOrganization] = useState('');
    const [maximumvalue, setvalue] = useState('');
    const [Deadline, setdeadline] = useState('');

    const navigate = useNavigate();  
    const params= useParams()
    const id= params.ID
  
        const handleSubmit = async () => {
            try {
              const response = await fetch(`http://localhost:3003/grants`, {
                method: 'post',
                body: JSON.stringify({
                title: title,
                fundingOrganization: fundingOrganization,
                MaximumValue: maximumvalue,
                Deadline: Deadline
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
              console.error('Error updating company:', error);
            }
          };
          
return (
    <Overlay>
        <h3> Add Grant </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName"> Title:</label>
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" id="title" name="title" placeholder="Enter your first name" required />
            <label htmlFor="type">Funding organization:</label>
            <input onChange={(e) => { setOrganization(e.target.value) }} type="text" id="organization" name="orginzation" placeholder="Enter type" required />
            <label htmlFor="number">Maximum value:</label>
            <input onChange={(e) => { setvalue(e.target.value) }} type="text" id="number" name="number" placeholder="Enter employees number" required />
            <label htmlFor="Surname">Sumbisstion Deadline:</label>
            <input onChange={(e) => { setdeadline(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter total liabilities" required />
          
             <button type="submit">Add</button>
             <Link to='/'> <button type="submit">Back home</button></Link>
        </form>
    </Overlay>
);}
export default AddGrant
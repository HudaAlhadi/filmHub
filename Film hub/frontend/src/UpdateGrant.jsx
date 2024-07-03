import { Link, useParams } from "react-router-dom";
import Overlay from "./Overlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateGrant= (props)=>{

  
  
    const [Title, setTitle] = useState('');
    const [FundingOrganization, setOrganization] = useState('');
    const [Maximumvalue, setvalue] = useState('');
    const [Deadline, setdeadline] = useState('');

    const navigate = useNavigate();  
    const params= useParams()
    const id= params.ID
  
         console.log(id)
        const handleSubmit = async () => {
            try {
              const response = await fetch(`http://localhost:3003/grants/${id}`, {
                method: 'put',
                body: JSON.stringify({
                    title: Title,
                    fundingOrganization: FundingOrganization,
                       Maximumvalue: Maximumvalue,
                       Deadline: Deadline,
                       grantID: id
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
        <h3> Update Grant </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName"> Title:</label>
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" id="firstName" name="Name" placeholder="Enter title" required />
            <label htmlFor="type">Funding organization:</label>
            <input onChange={(e) => { setOrganization(e.target.value) }} type="text" id="type" name="type" placeholder="Enter organization" required />
            <label htmlFor="number">Maximum value:</label>
            <input onChange={(e) => { setvalue(e.target.value) }} type="number" id="number" name="number" placeholder="Enter value" required />
            <label htmlFor="Surname">Sumbisstion Deadline:</label>
            <input onChange={(e) => { setdeadline(e.target.value) }} type="date" id="SurName" name="Surname" placeholder="Enter total liabilities" required />
          
             <button type="submit">Update</button>
             <Link to='/'> <button type="submit">Back home</button></Link>
        </form>
    </Overlay>
);}
export default UpdateGrant
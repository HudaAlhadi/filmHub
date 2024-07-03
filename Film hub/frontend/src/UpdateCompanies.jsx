import { Link, useParams } from "react-router-dom";
import Overlay from "./Overlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateCompanies= (props)=>{


    const [name, setName] = useState('');
    const [type, settype] = useState('');
    const [numberofemployees, setnumber] = useState('');
    const [liabilities, setliabilities] = useState('');
    const [assets, setassets] = useState('');
    const navigate = useNavigate();  
    const params= useParams()
    const id= params.ID
  
         console.log(id)
        const handleSubmit = async () => {
            try {
              const response = await fetch(`http://localhost:3003/companies/${id}`, {
                method: 'put',
                body: JSON.stringify({
                 name: name,
                 organizationType: type,
                 numberOfEmployees: numberofemployees,  
                 totalLiabilties: liabilities  ,
                 totalAssets: assets,
                 netValue: '0',
                  companyID: id,
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
        <h3> Update Company </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName"> Name:</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" id="firstName" name="Name" placeholder="Enter your first name" required />
            <label htmlFor="type">organizationType:</label>
            <input onChange={(e) => { settype(e.target.value) }} type="text" id="type" name="type" placeholder="Enter type" required />
            <label htmlFor="number">Number of employees:</label>
            <input onChange={(e) => { setnumber(e.target.value) }} type="text" id="number" name="number" placeholder="Enter employees number" required />
            <label htmlFor="Surname">Total liabilities:</label>
            <input onChange={(e) => { setliabilities(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter total liabilities" required />
            <label htmlFor="Surname">Total assets:</label>
            <input onChange={(e) => { setassets(e.target.value) }} type="text" id="assets" name="assets" placeholder="Enter total assets" required />
             <button type="submit">Update</button>
             <Link to='/'> <button type="submit">Back home</button></Link>
        </form>
    </Overlay>
);}
export default UpdateCompanies
import { Link, useParams } from "react-router-dom";
import Overlay from "./Overlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCompany= (props)=>{


    const [name, setName] = useState('');
    const [type, settype] = useState('');
    const [numberofemployees, setnumber] = useState('');
    const [liabilities, setliabilities] = useState('');
    const [netvalue, setnetvalue] = useState('');
    const [assets, setassets] = useState('');
    const [zipcode, setzipcode] = useState('');
    const [city, setcity] = useState('');
    const [nation, setnation] = useState('');
    const [address, setaddress] = useState('');
    
    const navigate = useNavigate();  
    const params= useParams()
    const id= params.ID
  
         console.log(id)
        const handleSubmit = async () => {
            try {
              const response = await fetch(`http://localhost:3003/addcompany`, {
                method: 'post',
                body: JSON.stringify({
                 name: name,
                 organizationType: type,
                 numberOfEmployees: numberofemployees,  
                 totalLiabilties: liabilities  ,
                 totalAssets: assets,
                 NetValue: netvalue,
                 zip_code:zipcode, 
                 city: city,
                 nation:nation,
                 address:address
                
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
        <h3> Add Company </h3>
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
            <label htmlFor="Surname">Net Value:</label>
            <input onChange={(e) => { setnetvalue(e.target.value) }} type="text" id="assets" name="assets" placeholder="Enter total assets" required />
            <label htmlFor="Surname">Zip_code:</label>
            <input onChange={(e) => { setzipcode(e.target.value) }} type="text" id="assets" name="assets" placeholder="Enter total assets" required />
            <label htmlFor="Surname">Nation:</label>
            <input onChange={(e) => { setnation(e.target.value) }} type="text" id="assets" name="assets" placeholder="Enter total assets" required />
            <label htmlFor="Surname">Adsress:</label>
            <input onChange={(e) => { setaddress(e.target.value) }} type="text" id="assets" name="assets" placeholder="Enter total assets" required />
            <label htmlFor="Surname">City:</label>
            <input onChange={(e) => { setcity(e.target.value) }} type="text" id="assets" name="assets" placeholder="Enter total assets" required />
             <button className="add"  type="submit">Add</button>
             <Link to='/'> <button className="add" type="submit">Back home</button></Link>
        </form>
    </Overlay>
);}
export default AddCompany
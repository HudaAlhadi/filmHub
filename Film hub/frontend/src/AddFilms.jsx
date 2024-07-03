import Overlay from "./Overlay";
import './Addfilms.css'
import { useState } from "react";

import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";


const AddFilm = () => {
    const [FilmCode, setFilm] = useState('');
    const [Title, setTitle] = useState('');
    const [Year, setYear] = useState('');
    const [FirstReleaseDate, setRelease] = useState('');

    const navigate = useNavigate();  

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3003/Addfilm', {
                method: 'post',
                body: JSON.stringify({
                    movieCode: FilmCode,
                    Title: Title,
                    Year: Year,  
                    FirstReleaseDate: FirstReleaseDate,  
        
                 
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
        <h3> Add Film </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName">Film Code:</label>
            <input onChange={(e) => { setFilm(e.target.value) }} type="text" id="firstName" name="GivenName" placeholder="Enter your first name" required />
            <label htmlFor="Surname">Title:</label>
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">Year:</label>
            <input onChange={(e) => { setYear(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">First Release Date:</label>
            <input onChange={(e) => { setRelease(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
           
            
             <button className="add" type="submit">Add </button>
             <Link to='/'> <button type="submit">Back home</button></Link>
          

        </form>
    </Overlay>
);}
 
export default  AddFilm;

import Overlay from "./Overlay";
import './Addfilms.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";


const UpdateFilms = () => {
    const [FilmCode, setFilm] = useState('');
    const [Title, setTitle] = useState('');
    const [Year, setYear] = useState('');
    const [FirstReleaseDate, setRelease] = useState('');
    
    const params= useParams()
    const id= params.ID
   
    const navigate = useNavigate();  

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3003/films/update/${id}`, {
                method: 'put',
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
        <h3> Update Film </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="GivenName">Film Code:</label>
            <input onChange={(e) => { setFilm(e.target.value) }} type="text" id="firstName" name="GivenName" placeholder="Enter your first name" required />
            <label htmlFor="Surname">Title:</label>
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">Year:</label>
            <input onChange={(e) => { setYear(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
            <label htmlFor="Surname">First Release Date:</label>
            <input onChange={(e) => { setRelease(e.target.value) }} type="text" id="SurName" name="Surname" placeholder="Enter your last name" required />
           
            
             <button className="add" type="submit">Update </button>
             <Link to='/'> <button type="submit">Back home</button></Link>
          

        </form>
    </Overlay>
);}
 
export default  UpdateFilms;

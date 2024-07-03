import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Overlay from './Overlay';
import './films.css';
import { useParams } from 'react-router-dom';
const Films= () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchfilms = async () => {
      try {
        const filmsResponse = await fetch(`http://localhost:3003/films`);
        ;
        const res = await filmsResponse.json();
        setList(res);
   
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchfilms();
  }, []);
  const handledeletion = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/film/${id}`, {
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
      <h3>Film list</h3>
      <Link to='/addFilm'>
        <button className='Add'>Add</button>
      </Link>
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>Film Code</th>
              <th>Title</th>
              <th>Year</th>
              <th>First Release Date</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {list.map((film,  index) => (
              <tr key={film.filmID}>
                <td>{film.movieCode}</td>
                <td>{film.Title}</td>
                <td>{film.Year}</td>
                <td>{film.FirstReleaseDate}</td>
               
                <td className='btn'>
                  <div className='btns'>
                    <Link to={`/films/update/${film.filmID}`}>
                      <button className='Update'>Update</button>
                    </Link>
                    <button className='Delete' onClick={() => handledeletion(film.filmID)}>
                      Delete
                    </button>   
                    <Link to={`/films/detail/${film.filmID}`}>         
             <button className='detail' type="button">Details</button> </Link>
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

export default  Films;

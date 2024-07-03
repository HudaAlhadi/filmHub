import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar=()=>{


    return (

        <div className="navbar">
              <div> <h3>Production Companies</h3></div>
            <ul>
                <Link  to='/' > <li>
       Home
                </li></Link>
             
                <Link  to='/films' ><li>
              Films
                </li></Link>
                <Link  to='/grant' ><li>
            Grant
                </li></Link>
             
                
            </ul>
          
        </div>
    )
}

export default Navbar
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Employees from './Employees'

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import UpdateEmployee from './UpdateEmployee'
import UpdateCompanies from './UpdateCompanies'
import Navbar from './Navbar'
import Overlay from './Overlay'
import Companies from './Companies'
import Shareholders from './Shareholders'
import Grant from './Grant'
import GrantApplications from './Grantapplications'
import UpdateShareholers from './UpdateShareholders'
import AddEmployee from './AddEmployee'
import AddCompany from './AddCompany'
import UpdateGrant from './UpdateGrant'
import AddGrant from './AddGrant'
import AddShareholders from './AddShareholer'
import Films from './Films'
import AddFilm from './AddFilms'
import FilmDetails from './FilmDetails'
import Compensation from './Compensation'
import UpdateFilms from './Updatefilms'
function App() {

  return (
    <> 
    <Overlay> 
   <Navbar> </Navbar>
      
     <Routes>
     <Route path='/' element= {<Companies/> }/>
        <Route path='/employees/:ID' element= {<Employees/> }/>
        <Route path='/AddEmp/:ID' element= {<AddEmployee/>  }/>
        <Route path='/AddFilm' element= {<AddFilm/>  }/>
        <Route path='/Addgrant' element= {<AddGrant/>  }/>
        <Route path='/addshare/:ID' element= {<AddShareholders/>  }/>
        <Route path='/addcompany' element= {<AddCompany/>  }/>
        <Route path='/employee/:ID' element= {<UpdateEmployee/>  }/>
        <Route path='/companies/:ID' element= {<UpdateCompanies/>  }/>
        <Route path='/grants/:ID' element= {<UpdateGrant/>  }/>
        <Route path='/companiess/:ID' element= {<Shareholders/>  }/>
        <Route path='/films/detail/:ID' element= {<FilmDetails/>  }/>
        <Route path='/films/update/:ID' element= {<UpdateFilms/>  }/>
        <Route path='/films' element= {<Films/>  }/>
        <Route path='/grant' element= {<Grant/>  }/>
        <Route path='/employee/compensation/:ID' element= {<Compensation/>  }/>
        <Route path='/grantApplication/:ID' element= {<GrantApplications/>  }/>
        <Route path='/shareholders/update/:ID' element= {<UpdateShareholers/>  }/>
        </Routes>   
        </Overlay>
        </>

  )
}

export default App

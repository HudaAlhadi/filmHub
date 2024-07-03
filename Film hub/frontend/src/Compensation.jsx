import { useState } from "react";
import Overlay from "./Overlay";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Compensation=()=>{

   
    const { ID } = useParams();

    const [list, setList] = useState([]);
    useEffect(()=>{
        const getCompensation=async()=> {
            try {
              const response = await fetch(`http://localhost:3003/compensation/${ID}`);
              const data = await response.json();
              console.log(data)
              setList(data)
              if (response.ok) {
               
                // Display or process the compensation data
              } else {
                console.error(data.error);
                // Handle error
              }
            } catch (error) {
              console.error(error);
              // Handle network or other errors
            }
          }
          getCompensation()
          console.log(list)

    },[])

    return (
        <Overlay>
        <h3>Compensations</h3>
     
        <div className='main'>
          <table>
            <thead>
              <tr>
              <th>Employee ID</th>
                <th>Hourly pay</th>
                <th>Monthly wage</th>
                <th>Daily bonus</th>
               
                <th>Additional bonus</th>
           
              </tr>
            </thead>
            <tbody>
            {list.map((comp,  index) => (
              <tr key={comp.compensation_id}>
                <td>{comp.EmployeeID}</td>
                <td>{comp.HourlyPay }</td>
                <td>{ comp.MonthlyWage}</td>
                <td>{comp.DailyBonus|| comp.BonusUponConclusion }</td>
                <td>{comp.SceneBonus}</td>
            
        
              </tr>
            ))}
          </tbody>
          </table>
          
        </div>
      </Overlay>
    )
}

export default Compensation
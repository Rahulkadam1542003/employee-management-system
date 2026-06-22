import axios from 'axios';
import { useEffect, useState } from 'react';
import './ShowEmployee.css';

export default function ShowEmployee() {

  let [employees, setEmployees] = useState([]);
  let [reload, setreload] = useState(false)
  let app=process.env.REACT_APP_SERVER_IP;

  useEffect(() => {
    axios.get(`${app}/findallemp`)
      .then((response) => {
        console.log(response.data)
        setEmployees(response.data)

      })
      .catch((error) => {
        alert("Error In Get Operation findallbyemp");
      })
  }, []);



  return (
    <div className='MainDiv'>



      <div className="container-fluid">
        <div className='row'>
          {employees.map((emp) =>
            <div className='col-3'>

              <div className="card col-4 me" style={{ "width": "20rem" }}>
                <img src={emp.profile} class="card-img-top" style={{ "height": "200px", "padding": "10px" }} alt="Profile"></img>
                <div className="card-body">
                  <h5 className="card-title">{emp.firstname} {emp.middlename} {emp.lastname}</h5>
                  <p className="card-text">
                    <p>
                      <strong>Contact No: {emp.contactno} </strong>
                    </p>
                    <p>
                      <strong>Email: {emp.email} </strong>
                    </p>
                    <p>
                      <strong>Department: {emp.department} </strong>
                    </p>
                    <p>
                      <strong>Designation: {emp.designation} </strong>
                    </p>
                    <p>
                      <strong>WorkLocation: {emp.worklocation} </strong>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>





    </div>
  )
}
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ViewEmployee.css';

export default function ViewEmployee() {

  const [employees, setEmployees] = useState([]);
  let [showform, setShowform] = useState(false)
  let [profile, setProfile] = useState("")
  let [firstname, setFirstname] = useState("")
  let [middlename, setMiddlename] = useState("")
  let [lastname, setLastname] = useState("")
  let [email, setEmail] = useState("")
  let [contactno, setContactno] = useState("")
  let [gender, setGender] = useState("")
  let [dob, setDob] = useState("")
  let [edu, setEdu] = useState("")
  let [caddress, setCaddress] = useState("")
  let [paddress, setPaddress] = useState("")
  let [aadharno, setAadharno] = useState("")
  let [panno, setPanno] = useState("")
  let [exp, setExp] = useState("")
  let [salary, setSalary] = useState("")
  let [status, setStatus] = useState("")
  let [designation, setDesignation] = useState("")
  let [department, setDepartment] = useState("")
  let [reportingmanager, setReportingmanager] = useState("")
  let [worklocation, setWorklocation] = useState("")
  let [joiningdate, setJoiningdate] = useState("")
  let [empid, setempid] = useState(0)
  let [reload, setreload] = useState(false)

  // variable for searching operation

  let [searchby, setSearchby] = useState("");
  let [keyword, setKeyword] = useState("");
  let [searchresult, setSearchresult] = useState([]);
  let app=process.env.REACT_APP_SERVER_IP;




  useEffect(() => {
    axios.get(`${app}/findallemp`)
      .then((response) => {
        setEmployees(response.data)
      })
      .catch((error) => {
        alert("Error in fetching data");
      })
  }, [reload])

  let deleteemployee = (empid) => {
    
    axios.delete(`${app}/deleteempbyid?empid=${empid}`)
      .then((response) => {
        if (response.data == "Employee record deleted successfully") {
          alert(response.data)
        }

      })
      .catch((error) => {
        alert("Error in delete operation...")
      })
  }
  let readytoupdate = (emp) => {


    setProfile(emp.profile)
    setFirstname(emp.firstname)
    setMiddlename(emp.middlename)
    setLastname(emp.lastname)
    setEmail(emp.email)
    setContactno(emp.contactno)
    setGender(emp.gender)
    setDob(emp.dob)
    setEdu(emp.edu)
    setCaddress(emp.caddress)
    setPaddress(emp.paddress)
    setAadharno(emp.aadharno)
    setPanno(emp.panno)
    setExp(emp.exp)
    setSalary(emp.salary)
    setStatus(emp.status)
    setDesignation(emp.designation)
    setDepartment(emp.department)
    setReportingmanager(emp.reportingmanager)
    setWorklocation(emp.worklocation)
    setJoiningdate(emp.joiningdate)
    setShowform(true)
    setExp(emp.exp)
    setempid(emp.empid)


  }

  let handleprofile = (event) => {
    let file = event.target.files[0]
    console.log(file.name);
    let filepath = `./img/${file.name}`;
    console.log(filepath)
    setProfile(filepath);
  }

  let updateemployee = (event) => {
    event.preventDefault()
    //empid newemp
    let newemp =
    {
      firstname, middlename, lastname, email, contactno, caddress, paddress, aadharno, panno, edu, exp, salary, designation, department, reportingmanager, worklocation, status, joiningdate, gender, dob, profile
    }
    axios.put(`${app}/updatebyid?empid=${empid}`, newemp)
      .then((response) => {
        if (response.data == "Employee record updated successfully") {
          alert(response.data)
          setShowform(false)
          setreload(!reload)
        }
      })
      .catch((error) => {
        alert("Error in update operation")
      })
  }
  let searchemployee = () => {
    //searchby
    let url;
    if (searchby == "firstname") {
      url = `${app}/findByFirstname?firstname=${keyword}`;
    }
    else if (searchby == "lastname") {
      url =`${app}/findByLastname?lastname=${keyword}`;
    }
    else if (searchby == "department") {
      url = `${app}/findByDepartment?department=${keyword}`;
    }
    else if (searchby == "designation") {
      url = `${app}/findByDesignation?designation=${keyword}`;
    }
    else if (searchby == "empid") {
      let keyword1 = parseInt(keyword);
      url = `${app}/findbyempid?empid=${keyword1}`;
    }
    else {
      alert("please select valid search criteria...")
      return;
    }
    axios.get(url)
      .then((response) => {
        if (response.data.length == 0) {
          alert(`No matching record found for given ${searchby}. Now we are showing  all records...`)
        }
        else {
          setSearchresult(response.data);
          console.log(response.data)
        }
      })

  }


  return (
    <div className="mainDiv">
      
      <div className="d-flex">
        <h3>Select Searchby:</h3>
        <select onChange={(event) => { setSearchby(event.target.value) }}>
          <option >Select Option</option>
          <option value="firstname">By Firstname</option>
          <option value="lastname">By Lastname</option>
          <option value="department">By Department</option>
          <option value="designation">By Designation</option>
          
        </select>
        {
          searchby && <div>   <input type="text" placeholder={`Enter ${searchby}`}
            onChange={(event) => { setKeyword(event.target.value) }}></input>
            <button onClick={searchemployee}>search</button>
          </div>
        }

      </div><br/>



      <div className="container-fluid">
        <div className="row">



        { (searchresult.length>0?searchresult:employees).map((emp) =>

        
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card col-4 me-2" style={{ "width": "20rem" }}>
                <img src={emp.profile} class="card-img-top" alt="Profile image" style={{ "height": "200px"  , "padding":"10px"}}></img>


                <div class="card-body">
                  <h5 class="card-title">{emp.firstname} {emp.middlename} {emp.lastname} {""} </h5>
                  <p class="card-text">
                    <p>Contactno: {emp.contactno}</p>
                    <p>Email: {emp.email}</p>
                    <p>Department: {emp.department}</p>
                    <p>Designation: {emp.designation}</p>
                    <p>Worklocation: {emp.worklocation}</p>
                  </p>
                  <div className="d-flex gap-2">

                    <button className="btn btn-warning" onClick={() => { readytoupdate(emp) }}>Update</button>

                    <button className="btn btn-danger" onClick={() => { deleteemployee(emp.empid) }}>Delete</button>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>

        {showform ?
          <div class="modal staet d-block" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Update Employee Form</h5>
                  <button type="button" class="btn-close" onClick={() => { setShowform(false) }} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">


                  <form onSubmit={updateemployee}>

                    <h5>Personal Information</h5>

                    <div className="row">

                      <div className="col-md-4 mb-3">
                        <label>First Name</label>
                        <input type="text"
                          value={firstname} className="form-control" onChange={(event) => { setFirstname(event.target.value) }} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Middle Name</label>
                        <input type="text" className="form-control" onChange={(event) => { setMiddlename(event.target.value) }} value={middlename} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" onChange={(event) => { setLastname(event.target.value) }} value={lastname} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={(event) => { setEmail(event.target.value) }} value={email} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Contact Number</label>
                        <input type="text" className="form-control" onChange={(event) => { setContactno(event.target.value) }} value={contactno} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Gender</label>
                        <select className="form-control" onChange={(event) => { setGender(event.target.value) }} value={gender} >
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control" onChange={(event) => { setDob(event.target.value) }} value={dob} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Education</label>
                        <input type="text" className="form-control" onChange={(event) => { setEdu(event.target.value) }} value={edu} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Current Address</label>
                        <input type="text" className="form-control" onChange={(event) => { setCaddress(event.target.value) }} value={caddress} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Permanent Address</label>
                        <input type="text" className="form-control" onChange={(event) => { setPaddress(event.target.value) }} value={paddress} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Aadhar Number</label>
                        <input type="text" className="form-control" onChange={(event) => { setAadharno(event.target.value) }} value={aadharno} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>PAN Number</label>
                        <input type="text" onChange={(event) => { setPanno(event.target.value) }} value={panno} />
                      </div>

                    </div>


                    <h5 className="mt-3">Work Information</h5>

                    <div className="row">

                      <div className="col-md-4 mb-3">
                        <label>Experience</label>
                        <input type="number"  className="form-control" onChange={(event) => { setExp(event.target.value) }} value={exp} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Salary</label>
                        <input type="number" className="form-control" onChange={(event) => { setSalary(event.target.value) }} value={salary} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Status</label>
                        <select className="form-control" onChange={(event) => { setStatus(event.target.value) }} value={status}>
                          <option>Select Status</option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Designation</label>
                        <input type="text" className="form-control" onChange={(event) => { setDesignation(event.target.value) }} value={designation} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Department</label>
                        <input type="text" className="form-control" onChange={(event) => { setDepartment(event.target.value) }} value={department} />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label>Reporting Manager</label>
                        <input type="text" className="form-control" onChange={(event) => { setReportingmanager(event.target.value) }} value={reportingmanager} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Work Location</label>
                        <input type="text" className="form-control" onChange={(event) => { setWorklocation(event.target.value) }} value={worklocation} />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Joining Date</label>
                        <input type="date" className="form-control" onChange={(event) => { setJoiningdate(event.target.value) }} value={joiningdate} />
                      </div>

                    </div>



                    <h5 className="mt-3">Profile Image</h5>

                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label>Upload Profile</label>
                        <input type="file" accept="image/*"
                          onChange={(event) => { handleprofile(event) }}
                          className="form-control" />
                      </div>

                      <div className="col-md-6 md-3">
                        <label>Preview</label>
                        <img src={profile} alt="profile" width="120"></img>
                      </div>

                    </div>


                    <button className="btn btn-primary mt-3">Update Employee</button>


                  </form>

                </div>
              </div>
            </div>
          </div> : null}
      </div>
    </div>

  );
}
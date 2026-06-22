import axios from 'axios';
import { useState } from 'react';


export default function AddEmployee() {
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
  let [adharno, setAdharno] = useState("")
  let [panno, setPanno] = useState("")
  let [exp, setExp] = useState("")
  let [salary, setSalary] = useState("")
  let [status, setStatus] = useState("")
  let [designation, setDesignation] = useState("")
  let [department, setDepartment] = useState("")
  let [reportingmanager, setReportingmanager] = useState("")
  let [worklocation, setWorklocation] = useState("")
  let [joiningdate, setJoiningdate] = useState("")
  let app=process.env.REACT_APP_SERVER_IP;

  let handleprofile = (event) => {
    let file = event.target.files[0]
    console.log(file.name);
    let filepath = `./img/${file.name}`;
    console.log(filepath)
    setProfile(filepath);
  }


  let validation = () => {
    if (profile == "" || firstname == "" || middlename == "" || lastname == "" || email == "" || contactno == 0 ||
      gender == "" || dob == "" || caddress == "" || paddress == "" || adharno == 0 || panno == "" ||
      edu == "" || exp == "" || salary == 0 || designation == "" || department == "" || reportingmanager == "" ||
      worklocation == "" || status == "" || joiningdate == "") {
      alert("Please fill in all required fields.");
      return false;
    }
    else
      if (!/^[A-Za-z]{2,16}$/.test(firstname)) {
        alert("First name should contain only alphabets.")
        return false;
      }
      else
        if (!/^[A-Za-z]{2,16}$/.test(middlename)) {
          alert("Middle name should contain only alphabets.")
          return false;
        }
        else
          if (!/^[A-Za-z]{2,16}$/.test(lastname)) {
            alert("Last name should contain only alphabets.")
            return false;
          }
          else if (!/^[0-9]{10}$/.test(contactno)) {
            alert("Please enter a valid 10-digit contact number.")
            return false;
          }
          else if (!/^[0-9]{12}$/.test(adharno)) {
            alert("Please enter a valid 12-digit Aadhaar number.")
            return false;
          }
          else if (!/^[A-Za-z0-9]{1,10}$/.test(panno)) {
            alert("Please enter a valid PAN number (e.g., ABCDE1234F).");
            return false;
          }
          else {
            return true;
          }
  }

  let addemp = (event) => {
    event.preventDefault();
    // if (!validation()) {
    //   return;
    // }


    let employee =
    {
      firstname, middlename, lastname, email, contactno, caddress, paddress, adharno, panno, edu, exp, salary, designation, department, reportingmanager, worklocation, status, joiningdate, gender, dob, profile
    }
    axios.post(`${app}/addemp`, employee)
      .then((Response) => {
        if (Response.data == "Employee record added successfully") {
          alert(Response.data);
        }

      })
      .catch((error) => {
        alert("Error in post operation")
      })

  }

  return (


    <div className="container mt-4">
      <h1 className="mb-3" style={{ textAlign: "center" }}>Add Employee Form</h1>


      <form onSubmit={addemp}>

        <h5>Personal Information</h5>

        <div className="row">

          <div className="col-md-4 mb-3">
            <label>First Name</label>
            <input type="text" placeholder="Firstname"
              onChange={(event) => { setFirstname(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Middle Name</label>
            <input type="text" placeholder="Middlename" onChange={(event) => { setMiddlename(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Last Name</label>
            <input type="text" placeholder="Lastname" onChange={(event) => { setLastname(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input type="email" placeholder="E-mail/Address" onChange={(event) => { setEmail(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Contact Number</label>
            <input type="text" placeholder="(+91)00000-00000" onChange={(event) => { setContactno(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Gender</label>
            <select className="form-control" placeholder="Gnder" onChange={(event) => { setGender(event.target.value) }}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label>Date of Birth</label>
            <input type="date" placeholder="Date-Of-Birth" onChange={(event) => { setDob(event.target.value) }} className="form-control" />
          </div>




          <div className="col-md-4 mb-3">
            <label>Education</label>
            <input type="text" placeholder="Education" onChange={(event) => {
              setEdu(event.target.value)
            }} className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Current Address</label>
            <input type="text" placeholder="Current-Address" onChange={(event) => { setCaddress(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Permanent Address</label>
            <input type="text" placeholder="Permanent-Address" onChange={(event) => { setPaddress(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Aadhar Number</label>
            <input type="text" placeholder="Aadharno" onChange={(event) => { setAdharno(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>PAN Number</label>
            <input type="text" placeholder="Pan-Number" className="form-control" onChange={(event) => { setPanno(event.target.value) }} />
          </div>

        </div>


        <h5 className="mt-3">Work Information</h5>

        <div className="row">

          <div className="col-md-4 mb-3">
            <label>Experience</label>
            <input type="number" className="form-control" placeholder="Experience" onChange={(event) => { setExp(event.target.value) }} />
          </div>

          <div className="col-md-4 mb-3">
            <label>Salary</label>
            <input type="number" placeholder="Salary" onChange={(event) => { setSalary(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Status</label>
            <select className="form-control" placeholder="Status" onChange={(event) => { setStatus(event.target.value) }}>
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label>Designation</label>
            <input type="text" placeholder="Designation" onChange={(event) => { setDesignation(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Department</label>
            <input type="text" placeholder="Department" onChange={(event) => { setDepartment(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Reporting Manager</label>
            <input type="text" placeholder="Reporting-Manager" onChange={(event) => { setReportingmanager(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Work Location</label>
            <input type="text" placeholder="Work-Location" onChange={(event) => { setWorklocation(event.target.value) }} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Joining Date</label>
            <input type="date" placeholder="Joining-Date" onChange={(event) => { setJoiningdate(event.target.value) }} className="form-control" />
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


        {/* add employee button     */}
        {/* <button className="btn btn-primary mt-3">Add Employee</button> */}

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary mt-3" style={{ width: "200px" }} >Add Employee</button>
        </div>



      </form><br />

    </div>

  )
}
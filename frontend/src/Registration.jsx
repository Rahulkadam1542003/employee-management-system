import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./registration.css";

export default function Registration() {


  let [isregistered, setisregistered] = useState(false)

  let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [gender, setgender] = useState("");
  let [email, setemail] = useState("");
  let [contactno, setcontactno] = useState(0);
  let [role, setrole] = useState("employee");
  let [empid, setempid] = useState(0);
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [confirmpassword, setconfimpassowrd] = useState("");
  let app=process.env.REACT_APP_SERVER_IP;


  let navigate = useNavigate();

  let validLogin = () => {
    if (username == "") {
      alert("Please Enter Username")
      return false;
    }
    else if (password == "") {
      alert("Please Enter Password")
      return false;
    }
    else {
      return true;
    }
  }

  let validRegistration = () => {
    if (firstname == "" || lastname == "" || email == "" || role == ""
      || gender == "" || contactno == 0 || empid == 0 || username == ""
      || password == "" || confirmpassword == "") {
      alert("Plase fill all the  Fields")
      return false;
    }

    else if (!/^[A-Za-z]{2,16}$/.test(firstname)) {
      alert("Please enter only alphabates in FirstName")
      return false;
    }

    else if (!/^[A-Za-z]{2,16}$/.test(lastname)) {
      alert("Please enter only alphabates in Lastname")
      return false;
    }
    else if (!/^[0-9]{10}$/.test(contactno)) {
      alert("Please Enter Valid 10 digit Contact NO")
      return false;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email");
      return false;
    }

    else if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*+-/)([A-Za-z0-9!@#$%^&*+-/]){5,}$/.test(username)) {
      alert("Username must conatins one alphabet,one spcial character, one number and min 5 length");
      return false;
    }
    else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+-/])([A-Za-z0-9!@#$%^&*+-/]){8,13}$/.test(password)) {
      alert("Password must cotains one Captial alphabet,one small alphabet,one spcial character, one number and Min 8 length MAX 15 ");
      return false;
    }

    else if (password != confirmpassword) {
      alert("Confirm Password Not matching")
      return false;
    }
    else {
      return true;
    }
  }

  let loginemp = (event) => {

    event.preventDefault();

    if (!validLogin()) {
    }
    console.log("Validated")

    let loginuser = { username, password }

    axios.post(`${app}/login`, loginuser)
      .then((response) => {
        if (response.data) {
          console.log("ok")
          alert("Login Success");
          let user = response.data;

          //localStorage
          localStorage.setItem("userinfo", JSON.stringify(user));
          localStorage.setItem("loggedin", "true");


          if (user.role.toLowerCase() == "admin") {
            // go to admindashboard
            navigate("/admindashboard")
          }
          else {
            // go to employeedashboard
            navigate("/employeedashboard")
          }
        }
      })
      .catch((error) => {
        alert("Invalid Username or Password")
      })
  }

  let registeremp = (event) => {

    event.preventDefault();
    if (true) {
      // empid
      axios.get(`${app}/findbyempid?empid=${empid}`)
        .then((response) => {
          let result = Object.keys(response.data);
          if (result.length != 0) {

            let regemp = { firstname, lastname, email, role, gender, contactno, empid, username, password, confirmpassword }

            axios.post(`${app}/register`, regemp)
              .then((response) => {

                if (response.data == "Registration sucessfully") {
                  alert(response.data)
                  setisregistered(true);


                  console.log(" REg IF")
                }
                else if (response.data == "You already register with this empid...please go for login") {
                  alert(response.data)

                  console.log(" Already exist IF")
                }
                else {
                  alert(response.data);


                  console.log(" last else ")
                  return;
                }
              })
              .catch((error) => {
                alert("Employee Regitration Failed")
              })
          }
          else {
            alert("Employee id does not exists...");
            return;
          }
        })
        .catch((error) => {
          alert("Error in registration...")
        })
    }
  }

  return (
    <div>

      {isregistered ?
        <form className="form-card" onSubmit={loginemp}>
          <h2>Login</h2>

          <div className="form-group">
            <label>Username</label>
            <input  type="text" name="username" onChange={(event) => { setusername(event.target.value) }} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={(event) => { setpassword(event.target.value) }} />
          </div>

          <button type="submit">Login</button>

          <button type="button" className="switch-btn" onClick={() => { setisregistered(false) }}>
            New User? Register
          </button>
        </form> :

        <form className="form-card" onSubmit={registeremp}>
          <h2>Create Account</h2>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input  type="text"  placeholder="Enter firstname" name="firstname" onChange={(event) => { setfirstname(event.target.value) }} />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter lastname" name="lastname" onChange={(event) => { setlastname(event.target.value) }} />
            </div>
          </div>

          <div className="form-group" >
            <label>Email</label>
            <input type="email" placeholder="Enter Emailid" name="form-control" onChange={(event) => { setemail(event.target.value) }} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <select name="gender"   onChange={(event) => { setgender(event.target.value) }}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Role</label>
              <select name="role" onChange={(event) => { setrole(event.target.value) }}>
              
  
                <option selected>Employee</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="Enter Contactno" name="contactno" onChange={(event) => { setcontactno(event.target.value) }} />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" placeholder="Enter EmployeeId" name="empid" onChange={(event) => { setempid(event.target.value) }} />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" name="username" onChange={(event) => { setusername(event.target.value) }} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" name="password" onChange={(event) => { setpassword(event.target.value) }} />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter Confirmpassword" name="cnfpass" onChange={(event) => { setconfimpassowrd(event.target.value) }} />
          </div>

          <button type="submit">Register</button>

          <button type="button" className="switch-btn alt" onClick={() => { setisregistered(true) }}>
            Already have an account? Login
          </button>
        </form>
      }


    </div>


  )
}
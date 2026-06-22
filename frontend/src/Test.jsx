import { useState } from 'react';
import './testpage.css';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
//import transformers from "img/Transformers.jpg";

export default function Test() {

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  return (
    <div className='MAin Container'>


 

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand logo">
            EMS
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">

              <li><Link to="/home" className="nav-link">Home</Link></li>
              <li><Link to="/addemp" className="nav-link">Add Employee</Link></li>
              <li><Link to="/viewemp" className="nav-link">View Employee</Link></li>
              <li><Link to="/aboutus" className="nav-link">About Us</Link></li>
              <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
              <li><Link to="/services" className="nav-link">Services</Link></li>

            </ul>

            {/* SEARCH */}
            <form className="d-flex search-box">
              <input
                type="search"
                placeholder="Search..."
                className="form-control"
              />
              <button className="btn search-btn">Search</button>
            </form>

          </div>
        </div>
      </nav>

      {/* DASHBOARD HEADER */}
      <div className="dashboard-banner">
        <h1>Welcome To Admin Dashboard</h1>
      </div>



    </div>



  )
}
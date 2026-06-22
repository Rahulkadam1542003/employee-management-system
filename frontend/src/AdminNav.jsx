import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function AdminNav() {

  let user=JSON.parse(localStorage.getItem("userinfo"))

  let navigate=useNavigate()
  let logout=()=>
  {
    localStorage.removeItem("userinfo");
    navigate("/");
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-Warning bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">EMS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <Link to="/home" className="nav-link active">Home</Link>
              </li>

              <li class="nav-item">
                <Link to="/addemp" className="nav-link">Add Employee </Link>
              </li>

              <li class="nav-item">
                <Link to="/viewemp" className="nav-link">View Employee </Link>
              </li>

              <li class="nav-item">
                <Link to="/aboutus" className="nav-link">About us</Link>
              </li>

              <li class="nav-item">
                <Link to="/contactus" className="nav-link">Contact us</Link>
              </li>

              <li class="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
             
             {user && <li class="nav-item">
          <span className='nav-link text-danger' style={{"fontSize":"25px"}}>
            Hello ,{user.username}</span>
        </li>}

              <li class="nav-item">
                <button className="btn btn-warning" onClick={logout}>Logout</button>
              </li>


            </ul>
           
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
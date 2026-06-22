import { Link, useNavigate } from 'react-router-dom';

export default function CommonNav() {

    let navigate= useNavigate();
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        EMS
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home" className="nav-link active">Home</Link>
                            </li>
                
                            <li class="nav-item">
                                <Link to="/aboutus" className="nav-link">About US</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contactus" className="nav-link">Contact US</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" className="nav-link">Our Services</Link>
                            </li>

                            <button onClick={()=>{navigate("/registration")}}>Sign UP</button>
                        </ul>
                        <form class="d-flex">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            ></input>
                            <button class="btn btn-danger" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>


    )
}
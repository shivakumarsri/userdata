import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{

    return(
        <nav class="navbar navbar-expand-lg navbar-light fw-bolder bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand fs-3 text-light " to="/Home">UserData</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                    </li>  
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/About">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
                    </li>
 {/*                    
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        */}
                    </ul>
                </div>
                <Link className="btn btn-light" to="/users/add">Add User</Link>
            </div>
        </nav>
    )
}
export default Navbar;
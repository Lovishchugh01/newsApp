// import React, { Component } from 'react'
import React from 'react'
import {Link} from "react-router-dom";
// export class Navbar extends Component {
const Navbar = () => {
  // render() {
    return ( 
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">NewsStack</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-light" to-current="page" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link text-light" href="/about">About</a>
                    </li> */}
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/technology">Technology</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  // }
}

export default Navbar

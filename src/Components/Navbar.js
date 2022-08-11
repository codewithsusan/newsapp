import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5" key="homepage" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-5 text-center">
                            <li className="nav-item mx-3" >
                                <Link className="nav-link " to="/business" >Business</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/sport">Sport</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
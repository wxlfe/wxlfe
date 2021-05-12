import React from 'react'
import { Link } from 'react-router-dom'
import { GoGrabber } from 'react-icons/go'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand nav-link">Nate Wolfe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                    <GoGrabber id="expand-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Me</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="nav-link">Skills</Link>
                        </li>
                        <li>
                            <Link to="/experience" className="nav-link">Experience</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

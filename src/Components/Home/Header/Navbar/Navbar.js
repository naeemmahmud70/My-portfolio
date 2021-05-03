import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container-fluid">
                <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item fw-bold ">
                            <Link class="nav-link active ms-5 text-white">Home</Link>
                        </li>
                        <li class="nav-item fw-bold">
                            <a class="nav-link active ms-5 text-white" href="#about">About</a>
                        </li>
                        <li class="nav-item fw-bold">
                            <a class="nav-link active ms-5 text-white" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item fw-bold">
                            <a class="nav-link active ms-5 text-white" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item fw-bold">
                            <a class="nav-link active ms-5 text-white" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <strong className="text-white">Naeem Mahmud</strong>
                <button class="navbar-toggler secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
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
                            <a class="nav-link active ms-5 text-white" href="#skill">Skill</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
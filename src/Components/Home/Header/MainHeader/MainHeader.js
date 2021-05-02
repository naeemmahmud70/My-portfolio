import React from 'react';
import './MainHeader.css'
import image from '../../../../header-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';

const MainHeader = () => {
    return (
        <div className="row height">
            <div className="col-md-7 text-white d-flex align-items-center">
                <div className="p-5">
                    <h2>Hello  World!</h2>
                    <h1>I'M <span className="name-color">NAEEM MAHMUD</span></h1>
                    <Typewriter
                        options={{
                            strings: ['<h2>Front-End Web Developer</h2>', '<h2>MERN Stack Web Developer</h2>'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div>
                        <a href="https://drive.google.com/file/d/1xJ9zDhgtQ43JrV4c2c2a87wfy97k-r48/view?usp=drivesdk" target="_blank"><button className="btn-style m-3">Download Resume <FontAwesomeIcon icon={faFileDownload} /></button></a>
                    </div>
                </div>
            </div>
            <div className="col-md-5 image-size d-flex align-items-center">
                <img className="img-fluid" src={image} alt="" />
            </div>
        </div>
    );
};

export default MainHeader;
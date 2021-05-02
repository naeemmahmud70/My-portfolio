import React from 'react';
import phone from '../../phone.jpg'
import computer from '../../computer.jpg'
import client from '../../client.jpg'
import './Service.css'

const Service = () => {
    return (
        <div style={{ backgroundColor: '#1E2749' }}>
            <h2 className="text-white text-center">My <span className="name-color">Services</span></h2>
            <div className="service-flex-style">
                <div className="service-div-style shadow m-3 p-4">
                    <div className="icon-style text-center">
                        <img src={phone} alt="" />
                    </div>
                    <div>
                        <h4 className="text-center mt-3 text-white">Responsive Design</h4>
                        <p className="text-justify text-white">I convert an existing website to a responsive web site like E-commerce, blog and portfolio etc</p>
                    </div>
                </div>
                <div className="service-div-style shadow m-3 p-4">
                    <div className="icon-style text-center">
                        <img src={computer} alt="" />

                    </div>
                    <div>
                        <h4 className="text-center mt-3 text-white">Web Development</h4>
                        <p className="text-justify text-white"> I specialize in creating interactive experiences an functional interface using React and JavaScript.</p>
                    </div>
                </div>
                <div className="service-div-style shadow m-3 p-4">
                    <div className="icon-style text-center">
                        <img src={client} alt="" />

                    </div>
                    <div>
                        <h4 className="text-center mt-3 text-white">Client Satisfaction</h4>
                        <p className="text-justify text-white">I try to my best for satisfacting by complete requirements.  I love spending time on fixing little details and optimizing web apps.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
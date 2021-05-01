import React from 'react';
import image from '../../../pic2.png'
import './About.css'

const About = () => {
    return (
        <div id="about" style={{ height: 'auto', backgroundColor: '#1E2749' }}>
            <div className='text-center text-color'>
              
                <h2 >About Me</h2>
            </div>
            <div className="row mt-5">
                <div className='col-md-5 '>
                    <img id="image-size" src={image} alt="" />
                </div>
                <div className="col-md-7 d-flex align-items-center mt-3">
                    <div className="text-white p-4">
                        <p>
                            A self-motivated and enthusiastic web developer with a deep interest in JavaScript and React.
                            I specialize in creating interactive experiences an functional interface using React and JavaScript.
                            I love spending time on fixing little details and optimizing web apps. Also I like working in a team.
                    </p>
                        <h5>Name: Naeem Mahmud</h5>
                        <h5>Age: 20</h5>
                        <h5>Address: Brahmanbaria, Chittagong</h5>
                        <h5>Email: naeemmahmud370@gmail.com</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
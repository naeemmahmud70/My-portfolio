import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div id="skills" className="p-5 d-flex justify-content-center" style={{ height: 'auto', backgroundColor: "#1E2749" }}>
            <div className="w-75">
                <h2 className="text-white">My <span style={{color:'red'}}>Skills</span></h2>
                <div className="text-white m-3">
                    <h5>CSS</h5>
                    <ProgressBar bgColor="#ffcb33" completed={80} />
                </div>
                <div className="m-3 text-white">
                    <h5>BootStrap</h5>
                    <ProgressBar bgColor="#00695c" completed={85} />
                </div>
                <div className="m-3 text-white">
                    <h5>JavaScript</h5>
                    <ProgressBar bgColor=" #ff3333" completed={70} />
                </div>
                <div className="m-3 text-white">
                    <h5>React</h5>
                    <ProgressBar bgColor=" #33ff47" completed={75} />
                </div>
                <div className="m-3 text-white">
                    <h5>Node JS</h5>
                    <ProgressBar bgColor=" #3373ff" completed={40} />
                </div>
                <div className="m-3 text-white">
                    <h5>Express JS</h5>
                    <ProgressBar bgColor=" #8033ff" completed={55} />
                </div>
                <div className="m-3 text-white">
                    <h5>MongoDB</h5>
                    <ProgressBar bgColor="#ff3375" completed={60} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import './ProjectsCard.css'

const ProjectsCard = ({ website }) => {
    const { heading, description, image, preview, client, server } = website;
    
    return (
        <div className="shadow card-style ">
            <div className='image-sizing'>
                <img src={image} alt="" />
            </div>
            <div className="">
                <strong>{heading}</strong>
                <p>{description}</p>
            </div>
            <div className="d-flex justify-content-around align-items-end">
                <div>
                    <a href={preview}><button className="button-style">Preview</button></a>
                </div>
                <div>
                    <a href={client}><button className="button-style">Client</button></a>
                </div>
                <div>
                    <a href={client}><button className="button-style">Server</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
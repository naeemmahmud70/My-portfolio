import React from 'react';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import './Projects.css'

const Projects = () => {
    const projects = [{
        id: 1,
        project: "Royal Planner",
        heading: "Royal Planner is a full stack event management website.",
        description: " Here an authenticated user can order any kind of event service. User can see his/her order lists and give review. User can pay total cost by payment gateway. Here is different dashboard for user and admin. Admin can add, delete and update service and also can make another admins.",
        preview: "https://royal-planner.web.app/",
        client: "https://github.com/naeemmahmud70/Royel-planner-client",
        server: "https://github.com/naeemmahmud70/Royel-planner-server",
        image: "https://i.postimg.cc/d0Pqs1Yr/royal.png"
    }, {
        id: 2,
        project: "FoodLand",
        heading: "FoodLand is a grocery shop full stack website.",
        description: "Here a user can see many kind of grocery products. When he will go to by a products he have to authenticated by email password and gmail account. User can see total purchased list and costs. After submitted order user can see a memo.",
        preview: "https://grocery-shoap.web.app/",
        client: "https://github.com/naeemmahmud70/grocery-shoap-client",
        server: "https://github.com/naeemmahmud70/grocery-shoap-server",
        image: "https://i.postimg.cc/hjMg1171/foodland.png"
    }, {
        id: 3,
        project: "Easy Rider",
        heading: "Easy Rider is a car transporting fronted website.",
        description: "This is a transport website where a user can see few car. User can fair any of car for his transport. After clicking car name he will go to another page and user will see the fair and sit. User can set destination and user will her/his destination by map.",
        preview: "https://rider-assignment.web.app/",
        client: "https://github.com/naeemmahmud70/easy-rider",
        image: "https://i.postimg.cc/pX3vCTy4/rider.png"
    }]
    return (
        <div id="projects" className="bg-color">
            <div className="text-center">
                <h2 className="text-white">My <span className="name-color">Projects</span></h2>
            </div>
            <div className="div-flex">
                {
                    projects.map(project => <ProjectsCard website={project} key={project.id}></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;
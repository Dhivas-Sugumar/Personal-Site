import React from "react"
import { H1 } from "../../styles/styles"
import ProjectItem from "./ProjectItem"

const Projects : React.FC = () => {
    return (
        <div id="projects">
        <H1>Projects</H1>
            <ProjectItem 
                title={"Minerva"} 
                image={undefined} 
                date={"Dec 2021 - present"} 
                description={`Developed full-stack web application using Ruby on Rails, PostgreSQL, Bootstrap, HTML,CSS, JavaScript.
                Enables user to create their own educational courses with text and videos, as well as enroll in
                courses created by instructors.
                Implemented user validation model, as well as database level validations for forms.
                Deployed site using Heroku and Google Cloud storage`} 
                technologies={[undefined]}/>
        </div>
    )
}

export default Projects
import Image from "next/image"
import React from "react"
import { H1 } from "../../styles/styles"
import ProjectItem from "./ProjectItem"
import minerva from '../../assets/minerva-screenshot.jpeg'
import rubymine from '../../assets/SkillLogos/jetbrains.svg'
import rubyRails from '../../assets/SkillLogos/ruby-on-rails.svg'
import heroku from '../../assets/SkillLogos/heroku.svg'
import ruby from '../../assets/SkillLogos/ruby.svg'
import postgreSQL from '../../assets/SkillLogos/postgresql.svg'


import { ProjectsContainer } from "./Projects.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IMAGE_WIDTH = 46
const IMAGE_HEIGHT = 48

const Projects : React.FC = () => {
    return (
        <div id="projects">
        <H1>Projects</H1>
            <ProjectsContainer>
            <ProjectItem 
                title={"Minerva"} 
                image={<Image src={minerva} alt={'minerva site screenshot'} height={250} width={400}/>} 
                startDate={"Dec 2021"} 
                endDate={"present"}
                description={['Developed full-stack web application using Ruby on Rails, PostgreSQL, Bootstrap, HTML,CSS, JavaScript.',
                `Enables user to create their own educational courses with text and videos, as well as enroll in
                courses created by instructors.`, 'Implemented user validation model, as well as database level validations for forms.',
                'Deployed site using Heroku and Google Cloud storage.'

            ]}
                technologies={[<Image src={rubyRails} alt="ruby on rails"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon icon={["fab", "bootstrap"]} size="3x" />,
                <Image src={heroku} alt="heroku" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <FontAwesomeIcon icon={["fab", "google"]} size="3x" />,
                <Image src={ruby} alt="ruby logo" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon icon={["fab", "html5"]} size="3x" />,
                <FontAwesomeIcon icon={["fab", "css3"]} size="3x" />,
                <FontAwesomeIcon icon={["fab", "js-square"]} size="3x" />,
                <Image src={postgreSQL} alt="SQL"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <Image src={rubymine} alt="ruby logo" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>

                ]}/>
                
            </ProjectsContainer>

        </div>
    )
}

export default Projects
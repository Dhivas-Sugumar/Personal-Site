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


import { ProjectsContainer, ProjectsItemsContainer } from "./Projects.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IMAGE_WIDTH = 46
const IMAGE_HEIGHT = 48

const Projects : React.FC = () => {
    return (
        <ProjectsContainer id="projects">
        <H1>Projects</H1>
            <ProjectsItemsContainer>
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
                technologies={[<Image key={1} src={rubyRails} alt="ruby on rails"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon  key={1} icon={["fab", "bootstrap"]} size="3x" />,
                <Image  key={1}  src={heroku} alt="heroku" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <FontAwesomeIcon  key={1}  icon={["fab", "google"]} size="3x" />,
                <Image  key={1}  src={ruby} alt="ruby logo" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon  key={1} icon={["fab", "html5"]} size="3x" />,
                <FontAwesomeIcon key={1}  icon={["fab", "css3"]} size="3x" />,
                <FontAwesomeIcon key={1} icon={["fab", "js-square"]} size="3x" />,
                <Image key={1} src={postgreSQL} alt="SQL"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <Image key={1} src={rubymine} alt="ruby logo" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>

                ]}/>
                
            </ProjectsItemsContainer>

        </ProjectsContainer>
    )
}

export default Projects
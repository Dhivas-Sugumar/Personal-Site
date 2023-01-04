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
import vercel from '../../assets/SkillLogos/vercel.svg'
import framerMotion from '../../assets/SkillLogos/framer-motion.svg'
import code from '../../assets/SkillLogos/visual-studio.svg'
import typescript from '../../assets/SkillLogos/typescript.svg'
import next from '../../assets/SkillLogos/nextjs.svg'
import materialUi from '../../assets/SkillLogos/material-ui.svg'
import portfolio from '../../assets/portfolio.jpg'
import intellij from '../../assets/SkillLogos/intellij.svg'
import pandas from '../../assets/SkillLogos/pandas.svg'
import pycharm from '../../assets/SkillLogos/pycharm.svg'
import imageProcessor from '../../assets/image-processor.jpg'
import dataviz from '../../assets/dataviz.jpeg'


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

            <ProjectItem 
                title={"Portfolio"} 
                image={<Image src={portfolio} alt={'porfolio site screenshot'} height={175} width={400}/>} 
                startDate={"Nov 2022"} 
                endDate={"present"}
                description={['Developed full-stack web application using Typescript, React, NextJS, HTML,CSS',
                `Designed the layout and style of components for the portfolio site.`, 'Implemented contact form using node mailer for ease of contact.',
                'Utilized material UI for components and animated components using Framer Motion.',
                'Deployed site using Vercel.']}
                technologies={[<Image key={1} src={typescript} alt="typescript"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon icon={["fab", "react"]} size="3x" />,
                <FontAwesomeIcon  key={1} icon={["fab", "html5"]} size="3x" />,
                <Image src={materialUi} alt="material ui"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon key={1}  icon={["fab", "css3"]} size="3x" />,
                <Image src={next} alt="nextJS" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <Image  key={1}  src={vercel} alt="vercel" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <Image src={framerMotion} alt="framer motion" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <Image src={code} alt="visual studio code" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
            ]}/>

            <ProjectItem 
                title={"Dataviz"} 
                image={<Image src={dataviz} alt={'dataviz screenshot'} height={175} width={200}/>} 
                startDate={"April 2021"} 
                endDate={"Nov 2021"}
                description={['A python based custom data wrangling and visualization script developed for the Northeastern Mhealth Lab.',
                `Utilized pandas and numpy to read in 2000+ raw csv files and clean the watch telemtry data.`, 'Uses a custom made visulization scheme built using pillow to vizualize the data.'
            ]}
                technologies={
                    [<FontAwesomeIcon icon={["fab", "python"]} size="3x" />,
                    <Image src={pandas} alt="pandas" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                    <Image src={pycharm} alt="pycharm" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
            ]}/>

            <ProjectItem 
                title={"Image Editor"} 
                image={<Image src={imageProcessor} alt={'image editor'} height={500} width={400}/>} 
                startDate={"Oct 2021"} 
                endDate={"Dec 2021"}
                description={['Built image processing application using the MVC design pattern and OOD priniciples.',
                 'Editor is capable of flipping, applying greyscale, sepia, mosaic on an image. Supports multipe image formats, and provides a color histogram.',
                `Designed the UI and implemented it using Java Swing.`,
                'Created a test suite to test functionality and view layout using JUnit.',
            ]}
                technologies={[<FontAwesomeIcon icon={["fab", "java"]} size="3x" />,
                <Image src={intellij} alt="IntelliJ" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />, 
            ]}/>
                
            </ProjectsItemsContainer>

        </ProjectsContainer>
    )
}

export default Projects
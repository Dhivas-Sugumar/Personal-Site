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
import portfolio from '../../assets/portfolio.jpeg'
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
                image={<Image src={minerva} alt={'minerva site screenshot'} height={250} width={600}/>} 
                startDate={"Dec 2021"} 
                endDate={"Jan 2023"}
                description={[`Developed full-stack web application using the MVC design pattern that enables users to create and enroll in text
                and video-based courses.`, `Implemented user validation model, as well as database level validations for forms. Developed full-stack web application using the MVC design pattern that enables users to create and enroll in text
                and video-based courses.`,
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
                image={<Image src={portfolio} alt={'porfolio site screenshot'} height={250} width={400}/>} 
                startDate={"Nov 2022"} 
                endDate={"present"}
                description={['Develop front end responsive website using Typescipt based React.js with a component driven philosophy.',
                `Design the layout and style of components for the portfolio site using Figma to simulate the look and feel of the website.`,
                `Utilize Framer Motion, Material UI AND custom styled-components to provide the styling and 3D animation for componets,`,
            ]}
                technologies={[<Image key={1} src={typescript} alt="typescript"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon key={1} icon={["fab", "react"]} size="3x" />,
                <FontAwesomeIcon  key={1} icon={["fab", "html5"]} size="3x" />,
                <Image key={1} src={materialUi} alt="material ui"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>,
                <FontAwesomeIcon key={1}  icon={["fab", "css3"]} size="3x" />,
                <Image key={1} src={next} alt="nextJS" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <Image  key={1}  src={vercel} alt="vercel" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <Image key={1}  src={framerMotion} alt="framer motion" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                <Image key={1} src={code} alt="visual studio code" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
            ]}/>

            <ProjectItem 
                title={"Dataviz"} 
                image={<Image src={dataviz} alt={'dataviz screenshot'} height={250} width={400}/>} 
                startDate={"April 2021"} 
                endDate={"Nov 2021"}
                description={['A python based custom data wrangling and visualization script developed for the Northeastern Mhealth Lab.',
                `Utilized pandas and numpy to read in 2000+ raw csv files and clean the watch telemtry data.`, 'Used a custom made visulization scheme built using pillow to vizualize the data.'
            ]}
                technologies={
                    [<FontAwesomeIcon key={1} icon={["fab", "python"]} size="3x" />,
                    <Image key={1} src={pandas} alt="pandas" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />,
                    <Image key={1} src={pycharm} alt="pycharm" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
            ]}/>

            <ProjectItem 
                title={"Image Editor"} 
                image={<Image src={imageProcessor} alt={'image editor'} height={250} width={400}/>} 
                startDate={"Oct 2021"} 
                endDate={"Dec 2021"}
                description={['Built image processing application using the MVC design pattern and OOD priniciples.',
                 'Editor is capable of flipping, applying greyscale, sepia, mosaic on an image. Supports multipe image formats, and provides a color histogram.',
                `Designed the UI and implemented it using Java Swing.`,
                'Created a test suite to test functionality and view layout using JUnit.',
            ]}
                technologies={[<FontAwesomeIcon key={1} icon={["fab", "java"]} size="3x" />,
                <Image key={1} src={intellij} alt="IntelliJ" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />, 
            ]}/>
                
            </ProjectsItemsContainer>

        </ProjectsContainer>
    )
}

export default Projects
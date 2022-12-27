import React from "react"
import { Grid, Tooltip } from "@mui/material"
import { H2, H4 } from "../../../styles/styles"
import SkillsItem from "./SkillsItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJava} from "@fortawesome/free-brands-svg-icons"

const Skills: React.FC = () => {

    return (
        <>
        <H2>Skills</H2>
        <H4>Programming Languages</H4>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <SkillsItem name={"Java"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Python"} logo={<FontAwesomeIcon icon={["fab","python"]} size="3x" />} proficiency={9} />
            <SkillsItem name={"Ruby"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={9} />
            <SkillsItem name={"HTML"} logo={<FontAwesomeIcon icon={["fab","html5"]} size="3x" />} proficiency={10} />
            <SkillsItem name={"CSS"} logo={<FontAwesomeIcon icon={["fab","css3"]} size="3x" />} proficiency={6} />
            <SkillsItem name={"JavaScript"} logo={<FontAwesomeIcon icon={["fab","js-square"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Typescript"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"SQL"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={5} />
            <SkillsItem name={"R"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={3} />
            <SkillsItem name={"C++"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={4} />
            </Grid>

        </Grid>

        <H4>Software Tools</H4>

        <Grid container spacing={2}>
            <Grid item xs={12}>
            <SkillsItem name={"Ruby Mine"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Visual Studio Code"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Eclipse"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"PyCharm"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"IntelliJ"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"AutoCAD"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Microsoft Suite"} logo={<FontAwesomeIcon icon={["fab","microsoft"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Adobe Suite"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Jupyter Notebook"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Heroku"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Vercel"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Google Cloud"} logo={<FontAwesomeIcon icon={["fab","google"]} size="3x" />} proficiency={8} />

            </Grid>

        </Grid>
              {/* <SkillsItem 
            type={"Programming Languages"} 
            skills={["Java","Python","Ruby","HTML","CSS","JavaScript", "TypeScript",
            "SQL(familiar)" ,"R(familiar)", "C++(familiar)"
            ]} 
        />
        <SkillsItem 
            type={"Software Tools"} 
            skills={["Ruby Mine", "Visual Studio Code", "Eclipse",
                "PyCharm", "IntelliJ", "AutoCAD", "Microsoft Suite", 
                "Adobe Suite", "Jupyter", "Heroku", "Vercel", "Google Cloud"
            ]} 
        />
        <SkillsItem 
            type={"Frameworks & Libraries"} 
            skills={["React", "NextJS", "NestJS", "Bootstrap", "Material UI", 
            "Framer Motion","Ruby on Rails", "pandas", "pillow", "scikit learn"
            ]} 
        /> */}

        <H4>Frameworks & Libraries</H4>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <SkillsItem name={"React"} logo={<FontAwesomeIcon icon={["fab","react"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"NextJS"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"NestJS"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Bootstrap"} logo={<FontAwesomeIcon icon={["fab","bootstrap"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Material UI"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Framer Motion"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"Ruby on Rails"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"pandas"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"pillow"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />
            <SkillsItem name={"scikit learn"} logo={<FontAwesomeIcon icon={["fab","java"]} size="3x" />} proficiency={8} />

            </Grid>

        </Grid>
        </>
        
    )
}

export default Skills
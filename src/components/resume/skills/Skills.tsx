import React from "react"
import { H2 } from "../../../styles/styles"
import SkillsItem from "./SkillsItem"

const Skills: React.FC = () => {

    return (
        <>
        <H2>Skills</H2>
        <H4>Programming Languages</H4>
            <SkillsItem name={"Java"} logo={undefined} proficiency={0} />

        <H4>Software Tools</H4>

        <H4>Frameworks & Libraries</H4>
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
        </>
        
    )
}

export default Skills
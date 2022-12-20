import React from "react"
import { SkillsItemProps } from "../../../../lib/types"
import { H4 } from "../../../styles/styles"

const SkillsItem: React.FC<SkillsItemProps> = (
    {
        type, 
        skills
    }
) => {
    return( 
       <>
       <H4>{type}</H4>
        <div>
            {skills.map((skill) => { return `${skill} |` })}
        </div>
        </>
    )
}

export default SkillsItem
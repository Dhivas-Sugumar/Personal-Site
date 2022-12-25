import React from "react"
import { SkillsItemProps } from "../../../../lib/types"
import { H4 } from "../../../styles/styles"

const SkillsItem: React.FC<SkillsItemProps> = (
    {
        name, 
        logo, 
        proficiency
    }
) => {
    return( 
        <div>
            {logo}
            <p>{name}</p>
            {proficiency}
        </div>
    //    <>
    //    <H4>{type}</H4>
    //     <div>
    //         {skills.map((skill) => { return `${skill} |` })}
    //     </div>
    //     </>
    )
}

export default SkillsItem
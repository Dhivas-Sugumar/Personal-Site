import { Tooltip } from "@mui/material"
import React from "react"
import { SkillsItemProps } from "../../../../lib/types"
import { H4 } from "../../../styles/styles"
import HoverCircle from "../../animation-components/HoverCircle/HoverCircle"

const SkillsItemContent: React.FC<SkillsItemProps> = (
    {
    name,
    logo,
    })=> {
    return(  
              
    <div>
        {logo}
        <p>{name}</p>
    </div>)
}


const SkillsItem: React.FC<SkillsItemProps> = (
    {
        name, 
        logo, 
        proficiency
    }
) => {
    return( 
        <Tooltip title={`${proficiency}`}>
            <div>
            <SkillsItemContent name={name} logo={logo} />
            </div>
        </Tooltip>

    )
}

export default SkillsItem
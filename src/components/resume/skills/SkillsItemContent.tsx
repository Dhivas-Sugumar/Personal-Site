import React, {  forwardRef, Ref } from "react"
import { SkillsItemProps } from "../../../../lib/types"
import { SkillsItemStyled } from "./SkillsItem.styles"

const SkillsItemContent = forwardRef((props: SkillsItemProps, ref : Ref<HTMLInputElement>) => {
    return(  
       
    <SkillsItemStyled ref={ref} {...props}>
        {props.logo}
        <p>{props.name}</p>
    </SkillsItemStyled>)
})

SkillsItemContent.displayName = 'SkillsItemContent';


export default SkillsItemContent
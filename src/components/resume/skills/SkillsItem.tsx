import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material"
import React, {  forwardRef, Ref } from "react"
import { SkillsItemProps } from "../../../../lib/types"
import HoverCircle from "../../animation-components/HoverCircle/HoverCircle"
import { SkillsItemStyled } from "./SkillsItem.styles";


const SkillsItemTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        width: '12em',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        textAlign: 'center',
        borderRadius: '1.2em',
        padding: '1em 1em',
        position: 'absolute',
        zIndex: 1,
        marginTop: '-20em',
    },
  }));


const SkillsItemContent = forwardRef((props: SkillsItemProps, ref : Ref<HTMLInputElement>) => {
    return(  
       
    <SkillsItemStyled ref={ref} {...props}>
        {props.logo}
        <p>{props.name}</p>
    </SkillsItemStyled>)
})


const SkillsItem: React.FC<SkillsItemProps> = (
    {
        name, 
        logo, 
        proficiency
    }
) => {
    return( 
        <SkillsItemTooltip title={`proficiency: ${proficiency}/10`} >
            <SkillsItemContent name={name} logo={logo} />

        </SkillsItemTooltip>

    )
}

export default SkillsItem
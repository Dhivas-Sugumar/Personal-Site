import React from "react";
import { H3 } from "../../styles/styles";
import TextLoop from "../animation-components/TextLoop/TextLoop";
import SideNav from "../sidenav/SideNav";
import { StyledHeaderContainer } from "./Header.styles";
 
const Header : React.FC = () => {
    return (
        <StyledHeaderContainer>
            <div className="flex flex-row">
            <H3 className="basis-5/12">DHIVAS SUGUMAR</H3>
            <H3 className="basis-7/12">
            <TextLoop texts={
                    ["SOFTWARE DEVELOPER",
                     "STUDENT",
                     "DESIGNER",
                     "READER",
                     "SPACE ENTHUSIAST",
                     "AURORA CHASER",
                     "TRAVELLER",
                     "PLANT DAD", 
                     "PHILOSOPHY ENTHUSIAST" 
                    ]
                    } 
                />
            </H3>
            <SideNav/>
            </div>
        </StyledHeaderContainer>
    )
}

export default Header
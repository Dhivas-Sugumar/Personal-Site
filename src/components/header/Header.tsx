import React from "react";
import { H3 } from "../../styles/styles";
import TextLoop from "../animation-components/TextLoop/TextLoop";
import SideNav from "../sidenav/SideNav";
import { HeaderName, HeaderLoop, SideNavContainer, StyledHeaderContainer, HeaderLoopText } from "./Header.styles";
 
const Header : React.FC = () => {
    return (
        <StyledHeaderContainer>
            <HeaderName>DHIVAS SUGUMAR</HeaderName>
            <HeaderLoop>
                <HeaderLoopText>
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
                </HeaderLoopText>
            </HeaderLoop>
                <SideNavContainer>
                <SideNav/>
                </SideNavContainer>
        </StyledHeaderContainer>
    )
}

export default Header
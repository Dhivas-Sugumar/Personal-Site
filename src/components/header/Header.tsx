import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextLoop from "../animation-components/TextLoop/TextLoop";
import SideNav from "../sidenav/SideNav";
import { HeaderName, HeaderLoop, SideNavContainer, StyledHeaderContainer, HeaderLoopText } from "./Header.styles";
 import {min} from '../../../lib/breakpoints'
const Header : React.FC = () => {

    const showTextLoop = useMediaQuery(min.tabletLg)
    return (
        <StyledHeaderContainer>
            <HeaderName>DHIVAS SUGUMAR</HeaderName>
            {showTextLoop && <HeaderLoop>
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
            </HeaderLoop>}
                <SideNavContainer>
                <SideNav/>
                </SideNavContainer>
        </StyledHeaderContainer>
    )
}

export default Header
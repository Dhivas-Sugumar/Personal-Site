import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextLoop from "../animation-components/TextLoop/TextLoop";
import SideNav from "../sidenav/SideNav";
import { HeaderName, HeaderLoop, StyledHeaderContainer, HeaderLoopText } from "./Header.styles";
 import {min} from '../../../lib/breakpoints'
import { useLocation } from "react-router-dom";
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

                <SideNav location={useLocation().pathname == "/" ? "home" : "notes"}/>
        </StyledHeaderContainer>
    )
}

export default Header
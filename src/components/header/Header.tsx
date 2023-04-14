import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextLoop from "../animation-components/TextLoop/TextLoop";
import SideNav from "../sidenav/SideNav";
import { HeaderName, HeaderLoop, StyledHeaderContainer, HeaderLoopText } from "./Header.styles";
 import {min} from '../../../lib/breakpoints'
import { useRouter } from "next/router";
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

                <SideNav location={ useRouter().pathname == "/" ? "home" : "notes"}/>
        </StyledHeaderContainer>
        
    )
}

export default Header
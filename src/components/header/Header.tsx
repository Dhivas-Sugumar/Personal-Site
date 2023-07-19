import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextLoop from "../animation-components/TextLoop/TextLoop";
import SideNav from "../sidenav/SideNav";
import { HeaderName, HeaderLoop, StyledHeaderContainer, HeaderLoopText, StyledHeaderNotesContainer } from "./Header.styles";
import { min } from '../../../lib/breakpoints'
import { useRouter } from "next/router";
import Link from "next/link";
const Header: React.FC = () => {

    const showTextLoop = useMediaQuery(min.tabletLg)
    const path = useRouter().pathname

    return (

        <StyledHeaderContainer>
            <Link href="/">
            <HeaderName>DHIVAS SUGUMAR</HeaderName>
            </Link>
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
            <SideNav />
        </StyledHeaderContainer>

    )
}

export default Header
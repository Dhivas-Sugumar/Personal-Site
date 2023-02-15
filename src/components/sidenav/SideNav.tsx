import React from "react"
import { Link } from "react-scroll";

import { P } from "../../styles/styles"
import { SideNavContainer } from "./Sidenav.styles";

const SideNav : React.FC = () => {
    return (
        <SideNavContainer>
            <ul>
                <li>
                <Link activeClass="active" smooth spy to="intro">
                Intro
              </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="resume">
                Resume
              </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="conatct">
                Contact
              </Link>
                </li>
            </ul>

        </SideNavContainer>
    )

}

export default SideNav
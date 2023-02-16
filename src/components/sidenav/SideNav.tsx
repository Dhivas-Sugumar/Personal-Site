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
                <a>Intro</a>
              </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="resume">
                <a>Resume</a>
              </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="projects">
                <a>Projects</a>
              </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="contact">
                <a>Contact</a>
              </Link>
                </li>
            </ul>

        </SideNavContainer>
    )

}

export default SideNav
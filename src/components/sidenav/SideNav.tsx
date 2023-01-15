import React from "react"
import { Link } from "react-scroll";

import { P } from "../../styles/styles"

const SideNav : React.FC = () => {
    return (
        <nav>
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

        </nav>
    )

}

export default SideNav
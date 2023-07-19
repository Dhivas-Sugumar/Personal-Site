import React from "react"
import { Link as ScrollLink} from "react-scroll";
import Link from 'next/link'
import { SideNavProps } from "../../../lib/types";

import { P } from "../../styles/styles"
import { SideNavContainer } from "./Sidenav.styles";

const SideNav : React.FC<SideNavProps> = ({location}) => {
  console.log(location)
  if (location === "home") {
    return (
        <SideNavContainer>
            <ul>
                <li>
                <ScrollLink activeClass="active" smooth spy to="intro">
                <a>Intro</a>
              </ScrollLink>
                </li>
                <li>
                <ScrollLink activeClass="active" smooth spy to="resume">
                <a>Resume</a>
              </ScrollLink>
                </li>
                <li>
                <ScrollLink activeClass="active" smooth spy to="projects">
                <a>Projects</a>
              </ScrollLink>
                </li>
                <li>
                <ScrollLink activeClass="active" smooth spy to="contact">
                <a>Contact</a>
              </ScrollLink>
                </li>
                <li>
                </li>
            </ul>

        </SideNavContainer>
    )

}
return (
  <SideNavContainer>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
      <Link href="/notes">Notes</Link>
      </li>
    </ul>
  </SideNavContainer>
)
}

export default SideNav
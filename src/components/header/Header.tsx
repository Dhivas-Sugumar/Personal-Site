import React from "react";
import { H3 } from "../../styles/styles";
import SideNav from "../sidenav/SideNav";
 
const Header : React.FC = () => {
    return (
        <header>
            <div className="flex flex-row">
            <H3 className="basis-4/12">DHIVAS SUGUMAR</H3>
            <H3 className="basis-8/12">SOFTWARE ENGINEER</H3>
            <SideNav/>
            </div>
        </header>
    )
}

export default Header
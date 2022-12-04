import React from "react";
import { H3, H4 } from "../../styles/styles";

const Footer : React.FC = () => {
    return (
        <footer>
            <div className="flex flex-row">
                <div className="basis-9/12">
                <H4>Made with 💖 and TypeScipt</H4>
                </div>
                <div className="basis-1/12">
                <H4>©Dhivas</H4>

                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from "react";
import { H3, H4 } from "../../styles/styles";
import { StyledFooterContainer } from "./Footer.styles";

const Footer : React.FC = () => {
    return (
        <StyledFooterContainer>
            <div className="flex flex-row mt-9">
                <div className="basis-9/12">
                <H4>Made with 💖 and TypeScipt</H4>
                </div>
                <div className="basis-1/12 self-end">
                <H4>©Dhivas</H4>

                </div>
            </div>
        </StyledFooterContainer>
    )
}

export default Footer

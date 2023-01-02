import React from "react";
import { StyledFooter, StyledFooterContainer, StyledFooterContent} from "./Footer.styles";

const Footer : React.FC = () => {
    return (
        <StyledFooter>
            <StyledFooterContainer>
                <StyledFooterContent alignment="start">Made with 💖 and TypeScipt</StyledFooterContent>
                <StyledFooterContent>©Dhivas</StyledFooterContent>
            </StyledFooterContainer>
        </StyledFooter>
    )
}

export default Footer

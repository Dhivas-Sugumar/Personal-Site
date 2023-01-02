import React from "react";
import { H4 } from "../../styles/styles";
import { StyledFooter, StyledFooterContainer} from "./Footer.styles";

const Footer : React.FC = () => {
    return (
        <StyledFooter>
            <StyledFooterContainer>
                <H4 >Made with 💖 and TypeScipt</H4>
            </StyledFooterContainer>
        </StyledFooter>
    )
}

export default Footer

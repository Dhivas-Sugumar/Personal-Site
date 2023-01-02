import styled from "@emotion/styled";
import { StyledFooterContentProps } from "../../../lib/types";
import { H4 } from "../../styles/styles";

const StyledFooter = styled.footer`
    padding: 5em 4em 0 4em;
`

const StyledFooterContainer = styled.div`
    display: flex;
    flex-direction: row;

`

const StyledFooterContent = styled(H4)<StyledFooterContentProps>`
    text-align: end;
`

export {StyledFooter, StyledFooterContainer, StyledFooterContent}
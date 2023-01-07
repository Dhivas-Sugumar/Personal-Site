import styled from "@emotion/styled";
import { max } from "../../../lib/breakpoints";

const StyledContactMeLinksContainer = styled.div`
    margin: 1em 10em 1em 5em;
`

const ContactMeContainer = styled.div`
    padding: 5em 4em;
`

const ContactMeContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media ${max.tablet} {
        flex-direction: column;
    }

`

export {StyledContactMeLinksContainer, ContactMeContainer,
    ContactMeContentContainer
}
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { P } from "../../styles/styles";

const StyledContactMeLinkContainer = styled(motion.div)`
display: flex;
flex-direction: row;
width: 110%;
margin: 2em 0;
padding: 0.5em 0;
border-radius: 2em;
border: 0.2em black;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const ContactMeLinkText = styled(P)`
padding: 0 0.5em;
    font-size: 2.5em;
`

export {StyledContactMeLinkContainer, ContactMeLinkText}
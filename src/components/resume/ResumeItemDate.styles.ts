import styled from "@emotion/styled"
import { max } from "../../../lib/breakpoints"
import { P } from "../../styles/styles"

const DateContainer= styled.div`
  text-align: center;   
  overflow: hidden;
  @media ${max.tablet} {
    text-align: start;
  }
`

const DateText = styled(P)`
  font-size: 1.5em
`

export {DateContainer, DateText}
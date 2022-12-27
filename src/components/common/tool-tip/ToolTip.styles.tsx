import styled from "@emotion/styled";

const StyledToolTip = styled.div`
  width: 12em;
  background-color: #000000;
  color: white;
  text-align: center;
  border-radius: 1.2em;
  padding: 1em 1em;
  position: absolute;
  z-index: 1;
  margin-top: -20em;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 0.5em;
    border-style: solid;
    border-color: #0000000
      transparent transparent transparent;
  }
`;

export {StyledToolTip}
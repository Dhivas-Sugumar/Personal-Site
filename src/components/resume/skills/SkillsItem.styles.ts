import styled from "@emotion/styled";

const StyledSkillsItemContainer = styled.div`
  display: inline-block;
`


const SkillsItemStyled = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items:center;
  width: 110px;
  height: 100px;
  margin: 0 0.75em 0 0.75em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &:hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
  }
  
  &:hover::after {
      opacity: 1;
  }

`

export {SkillsItemStyled, StyledSkillsItemContainer}
import styled from "@emotion/styled";
import {useTheme } from "@mui/material";

const SkillsItemStyled = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #fff;
  margin: 0 0.75em 0 0.75em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

export {SkillsItemStyled}
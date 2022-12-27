import React from 'react';
import { ToolTipProps } from '../../../../lib/types'
import { P } from '../../../styles/styles';
import { StyledToolTip } from './ToolTip.styles';

const ToolTip: React.FC<ToolTipProps> = ({ proficiency}) => {
  return (
    <StyledToolTip>
      <P>{proficiency}</P>
    </StyledToolTip>
  )
}

export default ToolTip;
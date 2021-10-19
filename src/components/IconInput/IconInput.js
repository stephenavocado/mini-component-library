import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width,
  size,
  placeholder,
}) => {
  return (
    <Wrapper 
      style = {{ '--width': width + 'px'}}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper


      />
      <Input 
        style = {{ '--width': width + 'px'}}
        placeholder = "Search..."
      />
      <Underline />
    </Wrapper>
      );
    };
  
  const Wrapper = styled.div`
    width: var(--width);
    border-radius: 2px;
  `

  const IconWrapper = styled.div`
    width: 11px;
    height: 16px;
  `

  const Input = styled.input`
    border: none; 
    width: var(--width);
    height: 16px;
    font-size: 16px;
    padding-bottom: 4px;

    &:focus {
      border: none;
    }
  `

  const Underline = styled.div`
    height: 0px;
    border: .5px solid ${COLORS.black};
    background-color: ${COLORS.black};
    border-radius: 2px;
    width: auto;
  `
    
export default IconInput;

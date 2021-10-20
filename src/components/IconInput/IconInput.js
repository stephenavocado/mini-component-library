import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
  /* delegate props down to where they are used */
}) => {
  const styles = STYLES[size];

  // TODO: validate size
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput 
      {...delegated} 
      style={{
        '--width': width + 'px', 
        '--height': styles.height + 'px', 
        '--border-thickness': styles.borderThickness + 'px',
        }} 
      />
    </Wrapper>
      );
    };
  
  const Wrapper = styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
      color: ${COLORS.black};
    }
  `;

  const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
  `;

  const TextInput = styled.input`
    /* we want the height to scale with browser */ 
    height: var(--height);
    width: var(--width);
    border: none;
    border-bottom: var(--border-thickness) solid ${COLORS.black};
    padding-left: 24px;
    color: inherit;
    font-weight: 700;
    font-size: ${14 / 16}rem;
    outline-offset: 2px;

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `;
    
export default IconInput;

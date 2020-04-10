import React from 'react';
import styled from 'styled-components';

import { MonoText } from './StyledText';

const StyledMessage = styled.View`
  flex: 1;
  text-align: center;
  padding: 30px;
`;

export default function Warning({ children, type, title }) {
  return (
    <StyledMessage>
      <MonoText size={30}>{title}</MonoText>
      <MonoText>{children}</MonoText>
    </StyledMessage>
  );
}

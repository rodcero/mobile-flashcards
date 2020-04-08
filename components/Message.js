import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.View`
  flex: 1;
  text-align: center;
  padding: 30px;
`;

import { MonoText } from './StyledText';

export default function Warning({ children, type, title }) {
  return (
    <StyledMessage>
      <MonoText size={30}>{title}</MonoText>
      <MonoText>{children}</MonoText>
    </StyledMessage>
  );
}

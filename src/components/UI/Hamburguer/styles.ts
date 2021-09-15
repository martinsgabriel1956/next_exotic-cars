import { ReactNode } from 'react';

import styled from 'styled-components';

interface HamburguerProps {
  children: ReactNode;
}

export const Container = styled.button<HamburguerProps>`
  display: none;
  
  @media (max-width: 425px) {
    display: block;
    position: absolute;
    margin-right: 6em;
    right: -70px;
  }

  cursor: pointer;
`;

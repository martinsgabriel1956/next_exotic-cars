import { ReactNode } from 'react';

import { Container } from './styles';

interface HamburguerProps {
  children: ReactNode;
  onClick: () => void;
}

export function Hamburguer({ children, ...props }: HamburguerProps) {
  
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};



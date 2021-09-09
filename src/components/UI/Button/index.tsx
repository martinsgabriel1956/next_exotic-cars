import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  isSignIn?: boolean;
}

export function Button({ children, ...props  }: ButtonProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};
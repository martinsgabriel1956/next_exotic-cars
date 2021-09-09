import { Button } from '../UI/Button';
import { FilterCar } from '../FilterCar';

import { Container, Logo, ButtonContainer } from './styles';

export function Header() {
  return (
    <Container>
      <Logo>Exotic<span>Cars</span></Logo>
      <FilterCar />
      <ButtonContainer>
        <Button>
          Sign up
        </Button>
        <Button isSignIn={true}>
          Sign In
        </Button>
      </ButtonContainer>
    </Container>
  );
};



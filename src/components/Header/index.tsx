import { Button } from '../UI/Button';
import { FilterCar } from '../FilterCar';

import { Container, Logo, ButtonContainer } from './styles';
import { useState } from 'react';
import { Hamburguer } from '../UI/Hamburguer';

export function Header() {
  const [hamburguerOpen, setHamburguerOpen] = useState<boolean>(false);

  function handleToggleHamburguer() {
    setHamburguerOpen(!hamburguerOpen);
  }

  return (
    <Container>
      <Logo>Exotic<span>Cars</span></Logo>
      <FilterCar />
      <ButtonContainer hasClicked={hamburguerOpen}>
        <Button>
          Sign up
        </Button>
        <Button isSignIn={true}>
          Sign In
        </Button>
      </ButtonContainer>
      <Hamburguer onClick={handleToggleHamburguer}>
        Fala comigo
      </Hamburguer>
    </Container>
  );
};



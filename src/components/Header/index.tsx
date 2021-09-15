import { Button } from "../UI/Button";
import { FilterCar } from "../FilterCar";

import { Container, Logo, ButtonContainer } from "./styles";
import { useState } from "react";
import { Hamburguer } from "../UI/Hamburguer";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export function Header() {
  const [hamburguerOpen, setHamburguerOpen] = useState<boolean>(false);

  function handleToggleHamburguer() {
    setHamburguerOpen(!hamburguerOpen);
  }

  return (
    <Container>
      <Logo>
        Exotic<span>Cars</span>
      </Logo>
      <FilterCar />
      <ButtonContainer hasClicked={hamburguerOpen}>
        <Button>Sign up</Button>
        <Button isSignIn={true}>Sign In</Button>
      </ButtonContainer>
      <Hamburguer onClick={handleToggleHamburguer}>
        {hamburguerOpen === false ? (
          <GiHamburgerMenu size={30} />
        ) : (
          <GrClose size={30} />
        )}
      </Hamburguer>
    </Container>
  );
}

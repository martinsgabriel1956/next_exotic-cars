import Image from "next/image";
import Link from "next/link";

import { Container, HeaderContainer, HeaderInfo, CarImage } from "./styles";

import car from "../../../public/images/NoPath - Copia (16).png";

export function CarComponent() {
  return (
    <Container>
      <Link href="/car-details">
        <a>
          <HeaderContainer>
            <HeaderInfo>
              <h3>Carro</h3>
              <p>Modelo</p>
            </HeaderInfo>
            <button>...</button>
          </HeaderContainer>
          <CarImage>
            <Image src={car} alt="" />
            <h3>
              <span>$</span>713<span>/day</span>
            </h3>
          </CarImage>
        </a>
      </Link>
    </Container>
  );
}

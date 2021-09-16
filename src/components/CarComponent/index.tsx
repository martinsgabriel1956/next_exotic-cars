import Image from "next/image";
import Link from "next/link";

import { Container, HeaderContainer, HeaderInfo, CarImage } from "./styles";

import car from "../../../public/images/NoPath - Copia (16).png";

interface CarComponentProps {
  carProps: {
    id: string;
    modelo: string;
    marca: string;
    pricePerDay: number;
    images: {
      logo: string;
      carImages: {
        bg: string[];
        cardImg: string[];
      };
    };
  };
}

export function CarComponent({ carProps: { id,
  marca, modelo, pricePerDay, images: {carImages: { cardImg}},
} }: CarComponentProps) {

  const imgSrc = cardImg[0];
  return (
    <Container>
      <Link href={`/${id}`}>
        <a>
          <HeaderContainer>
            <HeaderInfo>
              <h3>{marca}</h3>
              <p>{modelo}</p>
            </HeaderInfo>
            <button>...</button>
          </HeaderContainer>
          <CarImage>
            <Image src={imgSrc} alt="" width="800%" height="400px"  />
            <h3>
              <span>$</span>{pricePerDay}<span>/day</span>
            </h3>
          </CarImage>
        </a>
      </Link>
    </Container>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Container, HeaderContainer, HeaderInfo, CarImage } from "./styles";

interface carDetailsProps {
  car_id: number;
  color: string;
  icon: string;
  mainImg: string;
}

interface CarComponentProps {
  carProps: {
    id: string;
    modelo: string;
    marca: string;
    pricePerDay: number;
    logo: string;
    cardImg: string;
    details?: carDetailsProps[];
  };
}

export function CarComponent({
  carProps: {
    id,
    marca,
    modelo,
    pricePerDay,
    cardImg,
  },
}: CarComponentProps) {
  const imgSrc = cardImg;
  return (
    <Container>
      <Link href={`/car-details/${id}`}>
        <a>
          <HeaderContainer>
            <HeaderInfo>
              <h3>{marca}</h3>
              <p>{modelo}</p>
            </HeaderInfo>
            <button>...</button>
          </HeaderContainer>
          <CarImage>
            <Image src={imgSrc} alt="" width="225px" height="75px" />
          </CarImage>
          <h3>
            <span>$</span>
            {pricePerDay}
            <span>/day</span>
          </h3>
        </a>
      </Link>
    </Container>
  );
}

import Image from "next/image";

import { Container, ImageContainer } from "./styles";

interface CarCardProps {
  src: any;
  isActive: any;
}

export function CarCard({ src, isActive }: CarCardProps) {
  return (
    <Container isActive={isActive}>
      <ImageContainer isActive={isActive}>
        <Image alt="" src={src} />
      </ImageContainer>
    </Container>
  );
}

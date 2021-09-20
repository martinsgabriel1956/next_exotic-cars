import Image from "next/image";

import { Container, ImageContainer } from "./styles";

interface CarCardProps {
  src: string;
  isActive: any;
  width: string | number;
  height: string | number;
  color?: string | any;
  onClicked?: () => void;
}

export function CarCard({
  src,
  isActive,
  width,
  height,
  color,
  onClicked,
}: CarCardProps) {
  return (
    <Container color={color} isActive={isActive} onClick={onClicked} whileHover={{
      scale: 1.1,
    }}>
      <ImageContainer isActive={isActive}>
        <Image src={src} alt="" width={width} height={height} />
      </ImageContainer>
    </Container>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";

// import "@brainhubeu/react-carousel/lib/style.css";

import { Header } from "../../src/components/Header";

import {
  Container,
  CarViewContainer,
  CarInfoContainer,
  BackContainer,
  LinkContent,
  CarTypeContainer,
  BookContainer,
  BookNowContainer,
  CarCardContainer,
  LatestCarArrow,
  PreviousCarArrow
} from "../../styles/pages/CarDetails/styles";

import logo from "../../public/images/logo.png";
import carRed from "../../public/images/car_red.png";
import carRed2 from "../../public/images/car_red@2x.png";
import carSilver2 from "../../public/images/car_silver@2x.png";
import carYellow2 from "../../public/images/car_yellow@2x.png";

import { CarCard } from "../../src/components/CarCardContainer";

export default function CarDetails() {
  return (
    <>
      <Container
        initial={{ opacity: 0, x: 800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <main>
          <section>
            <CarInfoContainer>
              <Image src={logo} alt="" />
              <div>
                <h1>Carro Modelo</h1>
                <h2>$725/day</h2>
              </div>
            </CarInfoContainer>
            <CarViewContainer>
              <BackContainer>
                <Link href="/">
                  <LinkContent
                    whileHover={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <BsArrowLeft
                      size={26}
                      style={{
                        marginRight: 10,
                        marginLeft: -10,
                      }}
                    />
                    Back to catalog
                  </LinkContent>
                </Link>
              </BackContainer>
              <div>
                <Image src={carRed} alt="" />
              </div>
              <CarTypeContainer>
                <h3>01</h3>
                <h4>Red</h4>
              </CarTypeContainer>
            </CarViewContainer>
            <BookNowContainer>
              <Link href="/">
                <BookContainer>
                  Book now
                  <BsArrowRight
                    size={26}
                    style={{
                      marginRight: -0,
                      marginLeft: 20,
                    }}
                  />
                </BookContainer>
              </Link>
            </BookNowContainer>
          </section>
          <section>
            <CarCardContainer>
              <PreviousCarArrow>
                <BsArrowLeft
                  size={26}
                  color="#FFF"
                />
              </PreviousCarArrow>
              <CarCard isActive={false} src={carSilver2} />
              <CarCard isActive={true} src={carRed2} />
              <CarCard isActive={false} src={carYellow2} />
              <LatestCarArrow >
                <BsArrowRight
                  size={26}
                  color="#FFF"
                />
              </LatestCarArrow>
            </CarCardContainer>
          </section>
        </main>
      </Container>
    </>
  );
}

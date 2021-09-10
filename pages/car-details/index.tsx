import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Header } from "../../src/components/Header";
import {
  Container,
  CarViewContainer,
  CarInfoContainer,
  BackContainer,
  LinkContent,
  CarTypeContainer,
  BookContainer,
  BookNowContainer
} from "../../styles/pages/CarDetails/styles";

import logo from "../../public/images/logo.png";
import carRed from "../../public/images/car_red.png";


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
                  <LinkContent>
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
                      marginRight: -10,
                      marginLeft: 10,
                    }}
                  />
                </BookContainer>
              </Link>
            </BookNowContainer>
          </section>
        </main>
       
      </Container>
    </>
  );
}

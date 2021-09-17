import React, { useEffect, useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths } from "next";
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
  PreviousCarArrow,
  ImageContainer,
} from "../../styles/pages/CarDetails/styles";

// import logo from "../../public/images/logo.png";
import carRed from "../../public/images/car_red.png";
import carRed2 from "../public/images/car_red@2x.png";
import carSilver2 from "../public/images/car_silver@2x.png";
import carYellow2 from "../public/images/car_yellow@2x.png";

import { CarCard } from "../../src/components/CarCardContainer";
import { api } from "../../helpers/api";

interface carDetailsProps {
  url: string;
  color: string;
}

interface CarProps {
  id: string;
  modelo: string;
  marca: string;
  pricePerDay: number;
  images: {
    logo: string;
    carImages: {
      bg: carDetailsProps[];
      cardImg: string[];
    };
  };
}

interface CarComponentProps {
  car: {
    id: string;
    modelo: string;
    marca: string;
    pricePerDay: number;
    images: {
      logo: string;
      carImages: {
        bg: carDetailsProps[];
        cardImg: string[];
      };
    };
  };
}
interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function CarDetails({ car }: CarComponentProps) {
  const logo = car.images.logo;
  const carImages = car.images.carImages.bg[0].url;

  console.log(carImages);
  return (
    <>
      <Container
        initial={{ opacity: 0, x: 800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <main>
          <>
            <section>
              <CarInfoContainer>
                <Image src={logo} alt="" width="500px" height="500px" />
                <div>
                  <h1>{car.marca} {car.modelo}</h1>
                  <h2>${car.pricePerDay}/day</h2>
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
                {car.images.carImages.bg.map((car, index) => (
                  <ImageContainer
                    key={index}
                  >
                    <Image src={car.url} alt=""  />
                  </ImageContainer>

                ))}
                <CarTypeContainer>
                  <h3>{car.images.carImages.bg.length < 10 ? `0${car.images.carImages.bg.length}` : `${car.images.carImages.bg.length}`}</h3>
                  <h4>color</h4>
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
          </>
          {/* <section>
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
          </section> */}
        </main>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/cars");

  const paths = data.map((car: CarProps) => {
    return {
      params: {
        slug: car.id,
      }
    }
  })

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const { data } = await api.get(`/cars/${slug}`);

  const car: CarProps = {
      id: data.id,
      modelo: data.modelo,
      marca: data.marca,
      pricePerDay: data.pricePerDay,
      images: {
        logo: data.images.logo,
        carImages: {
          bg: [
            {
              url: data.images.carImages.bg.map((url: string) => url),
              color: data.images.carImages.bg.map((color: string) => color),
            }
          ],
          cardImg: data.images.carImages.cardImg,
        },
      },
    };
  ;

  return {
    props: {
      car,
    },
    revalidate: 60 * 60,
  };
};

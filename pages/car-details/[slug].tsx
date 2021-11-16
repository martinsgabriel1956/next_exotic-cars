import React, { useEffect, useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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

import { CarCard } from "../../src/components/CarCardContainer";
import { Header } from "../../src/components/Header";

import { api } from "../../helpers/api";

interface carDetailsProps {
  car_id: number;
  color: string;
  icon: string;
  mainImg: string;
}
interface CarProps {
  id: string;
  modelo: string;
  marca: string;
  pricePerDay: number;
  logo: string;
  cardImg: string;
  details?: carDetailsProps[];
}

interface CarComponentProps {
  car: {
    id: string;
    modelo: string;
    marca: string;
    pricePerDay: number;
    logo: string;
    cardImg: string;
    details?: carDetailsProps[];
  };
}
interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function CarDetails({ car }: CarComponentProps) {
  const [currentCar, setCurrentCar] = useState(0);

  const logo = car.logo;

  const handleNextCar = async () => {
    if (currentCar == 2) {
      setCurrentCar(0);
    } else {
      setCurrentCar((prevState) => prevState + 1);
    }
  };
  const handlePrevCar = async () => {
    if (currentCar == 0) {
      setCurrentCar(2);
    } else {
      setCurrentCar((prevState) => prevState - 1);
    }
  };

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
            {!car && <div>Carro não encontrado</div>}
            <section>
              {car && (
                <>
                  <CarInfoContainer>
                    <Image src={logo} alt="" width="500px" height="700px" />
                    <div>
                      <h1>
                        {car.marca} {car.modelo}
                      </h1>
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

                    <ImageContainer
                      initial={{ opacity: 0, x: 800 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={car.details![currentCar].mainImg}
                        alt=""
                        width="700px"
                        height="350px"
                      />
                    </ImageContainer>
                    <CarTypeContainer>
                      <h3>
                        {car.details!.length < 10
                          ? `0${car.details![currentCar].car_id}`
                          : `${car.details![currentCar].car_id}`}
                      </h3>
                      <h4>{car.details![currentCar].color}</h4>
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
                </>
              )}
            </section>
          </>
          {car.details && (
            <section>
              <CarCardContainer card={car.details}>
                {car.details.length === 1 ? (
                  <CarCard
                    isActive={true}
                    color={car.details[currentCar].color}
                    src={car.details[currentCar].icon}
                    width={"500px"}
                    height={"300px"}
                  />
                ) : (
                  <>
                    <PreviousCarArrow onClick={handlePrevCar}>
                      <BsArrowLeft size={26} color="#FFF" />
                    </PreviousCarArrow>
                    <CarCard
                      onClicked={handlePrevCar}
                      isActive={false}
                      src={
                        car.details[currentCar === 0 ? 2 : currentCar - 1]!.icon
                      }
                      width={"500px"}
                      height={"300px"}
                    />

                    <CarCard
                      isActive={true}
                      color={car.details[currentCar].color}
                      src={car.details[currentCar].icon}
                      width={"500px"}
                      height={"300px"}
                    />

                    <CarCard
                      onClicked={handleNextCar}
                      isActive={false}
                      src={
                        car.details[currentCar === 2 ? 0 : currentCar + 1]!.icon
                      }
                      width={"500px"}
                      height={"300px"}
                    />
                    <LatestCarArrow onClick={handleNextCar}>
                      <BsArrowRight size={26} color="#FFF" />
                    </LatestCarArrow>
                  </>
                )}
              </CarCardContainer>
            </section>
          )}
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
        slug: car.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const { data } = await api.get(`/cars/${slug}`);

  return {
    props: {
      car: data,
    },
    revalidate: 60 * 60,
  };
};

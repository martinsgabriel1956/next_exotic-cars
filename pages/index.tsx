import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../helpers/api";

import { CarComponent } from "../src/components/CarComponent";
import { Header } from "../src/components/Header";
import { BackToTopButton } from "../src/components/UI/BackToTopButton";

import { CarsContainer } from '../styles/pages/Home/styles';

interface CarProps {
  id: string;
  modelo: string;
  marca: string;
  pricePerDay: number;
  images: {
    logo: string;
    carImages: {
      bg: string[];
      cardImg: string[];
    }
  }
}


const Home: NextPage = () => {
  const [car, setCar] = useState<CarProps[]>([]);

  useEffect(() => {
    api.get('/cars').then(res => {
      setCar(res.data);
    })
  }, [])
  return (
    <>
      <Header />
      <CarsContainer
        initial={{ opacity: 0, x: -350 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {car.map(car => (
          <CarComponent key={car.id} carProps={car} />
        ))}
      </CarsContainer>
      <BackToTopButton />
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import { CarComponent } from "../src/components/CarComponent";
import { Header } from "../src/components/Header";

import { CarsContainer } from '../styles/pages/Home/styles';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CarsContainer>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        
      </CarsContainer>
    </>
  );
};

export default Home;

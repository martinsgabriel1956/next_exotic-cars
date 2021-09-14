import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import { CarComponent } from "../src/components/CarComponent";
import { Header } from "../src/components/Header";
import { BackToTopButton } from "../src/components/UI/BackToTopButton";

import { CarsContainer } from '../styles/pages/Home/styles';

const Home: NextPage = () => {
  useRouter

  return (
    <>
      <Header />
      <CarsContainer
        initial={{ opacity: 0, x: -350 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
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
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
        <CarComponent/>
      </CarsContainer>
      <BackToTopButton />
    </>
  );
};

export default Home;

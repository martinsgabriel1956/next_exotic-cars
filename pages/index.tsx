import type { GetStaticProps } from "next";
import { api } from "../helpers/api";

import { CarComponent } from "../src/components/CarComponent";
import { Header } from "../src/components/Header";
import { BackToTopButton } from "../src/components/UI/BackToTopButton";

import { CarsContainer } from "../styles/pages/Home/styles";

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

interface HomeProps {
  cars: CarProps[];
}

function Home({ cars }: HomeProps) {
  return (
    <>
      <Header />
      <CarsContainer
        initial={{ opacity: 0, x: -350 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {cars.map((car) => (
          <CarComponent key={car.id} carProps={car} />
        ))}
      </CarsContainer>
      <BackToTopButton />
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/cars");

  console.log(data);

  return {
    props: {
      cars: data
    },
  };
};

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;

  @media (min-width: 320px) and (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const CarInfoContainer = styled.div`
  margin-top: 2em;
  margin-left: 6em;
  display: flex;
  align-items: center;

  @media (min-width: 320px) and (max-width: 600px) {
    justify-content: center;
    margin-top: .25em;
    margin-left: 0em;
  }

  > div {
    margin-left: 2.5em;
    margin-bottom: 2em;

    @media (max-width: 320px) {
      margin-left: 1.25em;
    };
    
    img {
      @media (min-width: 320px) {
        width: 80px;
      };
    }

    h1 {
      color: #313136;
      font-size: 2em;
      margin-bottom: -0.35em;

      @media (min-width: 375px) and (max-width: 767px) {
        margin-bottom: -0.35em;
      }
    }

    h2 {
      font-weight: 300;
    }
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 320px) and (max-width: 600px) {
    margin-top: 10em;
  }
  
  @media (min-width: 601px) and (max-width: 767px) {
    margin-top: 8em;
  }

  @media (min-width: 460px) and (max-width: 767px) {
    img {
      width: 448px;
      height: 233px;
    }
    
  }
`;

export const CarViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: -9em;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BackContainer = styled.div`
  padding-left: 7em;

  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    bottom: 70px;
    padding-left: 0em;
  }

  /* @media (min-width: 768px) and (max-width: 1248px) {
    padding-left: 2em;
  }
  
  @media (min-width: 1249px) and (max-width: 1264px) {
    padding-left: 3em;
  }
  
  @media (min-width: 1265px) and (max-width: 1295px) {
    padding-left: 4em;
  }
  
  @media (min-width: 1281px) and (max-width: 1296px) {
    padding-left: 5em;
  }
 
  @media (min-width: 1297px) and (max-width: 1312px) {
    padding-left: 6em;
  } */
`;

export const LinkContent = styled(motion.a)`
  cursor: pointer;
  border: 1px solid #313136;
  padding: 0.75em 1.5em;
  border-radius: 1.75em;

  font-size: 16px;
  font-weight: 300;

  display: flex;
  align-items: center;

  transition: all 0.3s ease-in-out;

  &:hover {
    background: #313136;
    color: #ffffff;
  }
`;

export const CarTypeContainer = styled.div`
  margin-right: 12em;
  margin-bottom: 20em;

  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    right: 40px;
    margin-right: 0em;
    margin-bottom: 18em;
  }

  h3 {
    font-size: 2.25em;
    margin-bottom: -0.5em;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.75em;
      margin-bottom: -0.5em;
    }
  }

  h4 {
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.25em;
    }

    font-size: 1.5em;
    font-weight: 300;
  }
`;

export const BookNowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #313136;
  border-radius: 1.5em;

  cursor: pointer;
  color: #fff;
  padding: 0.75em 2.25em;

  margin-top: -2.5em;

  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    bottom: 10px;
  }
`;

export const CarCardContainer = styled.ul`
  margin: 2em 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LatestCarArrow = styled.button`
  background-color: #313136;
  margin-right: 3.5em;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #313136;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviousCarArrow = styled.button`
  background-color: #313136;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #313136;

  display: flex;
  align-items: center;
  justify-content: center;
`;

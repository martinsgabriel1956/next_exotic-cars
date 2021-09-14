import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  min-height: 100vh;
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
`;

export const CarInfoContainer = styled.div`
  margin-top: 2em;
  margin-left: 6em;
  display: flex;
  align-items: center;

  > div {
    margin-left: 2.5em;
    margin-bottom: 2em;

    h1 {
      color: #313136;
      font-size: 2em;
      margin-bottom: -0.35em;
    }

    h2 {
      font-weight: 300;
    }
  }
`;

export const CarViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: -9em;
`;

export const BackContainer = styled.div`
  padding-left: 7em;
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

  h3 {
    font-size: 2.25em;
    margin-bottom: -0.5em;
  }

  h4 {
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
  padding: .75em 2.25em;

  margin-top: -2.5em;
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
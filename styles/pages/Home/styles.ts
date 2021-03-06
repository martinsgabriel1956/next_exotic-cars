import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarsContainer = styled(motion.ul)`
  padding-left: 5em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 0;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media (min-width: 768px) and (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 20px;
  }
  
  @media (min-width: 1024px) and (max-width: 1039px) {
    grid-template-columns: repeat(3, 1fr);
    padding-right: 2em 
  }
  @media (min-width: 1680px) and (max-width: 2559px) {
    grid-template-columns: repeat(5, 1fr);
    padding-right: 2em 
  }
  
  @media (min-width: 2560px) {
    grid-template-columns: repeat(6, 1fr);
    padding-right: 2em 
  }
`;

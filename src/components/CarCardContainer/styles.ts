import styled from "styled-components";
import { motion } from "framer-motion";

interface styleProps {
  isActive: boolean;
  color?: string | any;
}

export const Container = styled(motion.li)<styleProps>`
  width: 309px;
  height: 241px;

  background: ${props => props.isActive && props.color === false ? '#cecece 0% 0% no-repeat padding-box' : `transparent linear-gradient(52deg, ${props.color} 0%, #E6D3F1 100%) 0% 0% no-repeat padding-box`};
  box-shadow: 0px 8px 20px #0000001a;

  border-radius: 8px;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  margin-bottom: ${props => props.isActive === false ? 'none' : '140px'};
  
  &:hover {
    
  }
`;

export const ImageContainer = styled.div<styleProps>`
  width: 300px;
  height: 179px;
  margin-left: ${props => props.isActive === false ? 20 : 30}px ;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${props => props.isActive === false ? '' : 'scale(1.40)'};
`;
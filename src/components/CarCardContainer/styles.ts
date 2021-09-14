import styled from "styled-components";

interface styleProps {
  isActive: boolean;
}

export const Container = styled.li<styleProps>`
  width: 234px;
  height: 179px;

  background: ${props => props.isActive === false ? '#cecece 0% 0% no-repeat padding-box' : 'transparent linear-gradient(52deg, #A1A7F4 0%, #E6D3F1 100%) 0% 0% no-repeat padding-box'};
  box-shadow: 0px 8px 20px #0000001a;

  border-radius: 8px;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  margin-bottom: ${props => props.isActive === false ? 'none' : '80px'};
  
`;

export const ImageContainer = styled.div<styleProps>`
  width: 300px;
  height: 179px;
  margin-left: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;

  position: absolute;
`;
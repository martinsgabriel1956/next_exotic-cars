import styled from 'styled-components';

interface ContainerProps {
  showInPage: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: #E6D3F1;
  border: 1px solid #E6D3F1;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 999;

  display: ${props => props.showInPage === true ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 160px;
  bottom: 80px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  cursor: pointer;
`;

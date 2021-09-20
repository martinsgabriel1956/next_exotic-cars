import styled from "styled-components";

interface hasClickedProps {
  hasClicked: boolean;
}

export const Container = styled.div`
  box-shadow: 0px 10px 30px #0000001a;
  padding: 0.75em 0.25em;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;

  @media (max-width: 425px) {
    position: relative;
  }

  
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  color: #313136;
  font-weight: 500;
  letter-spacing: 2px;

  padding: 0 1em 0 4em ;

  @media (max-width: 600px) {
    padding-left: 0.5em;
  }
  span {
    margin-left: 0.25em;
    font-size: 16px;
    font-weight: normal;
  }

  @media(min-width: 601px) and (max-width: 1439px) {
    padding-left: 3em;
  }
`;

export const ButtonContainer = styled.div<hasClickedProps>`
  display: flex;
  align-items: center;
  padding-right: 6em;

  button:nth-child(1) {
    margin-right: 0.75em;

    @media (max-width: 767px) {
      margin-right: 0em;
    }
  }

  

  @media (max-width: 600px) {
    flex-direction: column;
    position: ${(props) => props.hasClicked === true && "absolute"};
    display: ${(props) => (props.hasClicked === false ? "none" : "flex")};
    top: 84px;
    right: -70px;

    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
    
      height: 100vh;
      width: 80vw;
  }
  
  @media (min-width: 601px) and (max-width: 687px) {
    padding-right: 8%;
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    padding-right: 8%;
  }
`;

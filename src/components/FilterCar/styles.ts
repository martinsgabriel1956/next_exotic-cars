import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f1fc;
  padding: 0 4px 0 20px;

  width: 100%;
  max-width: 540px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 1.25em;

  @media (max-width: 600px) {
    visibility: hidden;
  }

  @media (min-width: 1042px) and (max-width: 1053px) {
    width: 50%;
  }
  
  @media (min-width: 905px) and (max-width: 1041px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 38%;
    padding: 0 14px 0 12px;
  }

  p {
    color: #656469;
    font-weight: 500;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.25em;

  p {
    padding-left: 0.75em;
    font-size: 12px;

    @media (min-width: 858px) and (max-width: 970px) {
      margin-right: 0em;
      padding-left: 0.75em;
    }
  }

  margin-right: 1.5em;
`;

export const CalendarContainer = styled.div`
  display: flex;
  
  @media (min-width: 1140px) and (max-width: 1439px) {
  }
  
  @media (max-width: 768px) {
    padding-right: 0em;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      margin-right: 1em;
    }

    p {
      margin-left: 0.5em;
      font-size: 12px;

      @media (min-width: 858px) and (max-width: 952px) {
        & + div {
          margin-right: 5em;
        }
      }

      /* @media (max-width: 768px) {
        font-size: 10px;
      } */
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%;
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin-left:  1em;

  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 1024px) and (max-width: 1439px){
    right: 30.5%;
  }
 
  @media (max-width: 768px) {
    right: 31.25%;
  }
`;

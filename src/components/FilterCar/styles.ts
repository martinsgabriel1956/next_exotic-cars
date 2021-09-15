import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f1fc;
  padding: 0 20px;
  width: 40%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 1.25em;

  @media (max-width: 768px) {
    visibility: hidden;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 46%;
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
    font-size: 14px;

    @media (max-width: 1024px) {
      margin-right: -4em;
      padding-left: 0.75em;
      font-size: 12px;
    }
    
    @media (max-width: 768px) {
      margin-right: -4em;
      padding-left: .5em;
      font-size: 10px;
    }
  }

  margin-right: 1.5em;
`;

export const CalendarContainer = styled.div`
  display: flex;
  padding-right: 4.5em;

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-right: 2.25em;
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
      font-size: 14px;

      @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 12px;
      }
      @media (max-width: 768px) {
        font-size: 10px;
      }
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

  position: absolute;
  right: 31.5%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 1024px) and (max-width: 1439px){
    right: 30.5%;
  }
 
  @media (max-width: 768px) {
    right: 31.25%;
  }
`;

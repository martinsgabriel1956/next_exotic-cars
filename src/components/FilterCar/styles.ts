import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F3F1FC;
  padding: 0 20px;
  width: 40%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 1.25em;

  p {
    color: #656469;
    font-weight: 500;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: .25em;

  p {
    padding-left: .75em;
    font-size: 14px;
  }

  margin-right: 1.5em;
`

export const CalendarContainer = styled.div`
  display: flex;
  padding-right: 4.5em;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      margin-right: 1em;
    }

    p {
      margin-left: .5em;
      font-size: 14px;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
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
`;


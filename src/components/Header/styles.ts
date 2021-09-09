import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 10px 30px #0000001A;
  padding: .25em;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  color: #313136;
  
  padding-left: 6em;
  
  span {
    margin-left: .25em;
    font-size: 16px;
    font-weight: normal;
  }
  `;

  export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 6em;

    button:nth-child(1) {
      margin-right: .75em ;
    }
  `;
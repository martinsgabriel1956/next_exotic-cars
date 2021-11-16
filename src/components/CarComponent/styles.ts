import styled from "styled-components";

export const Container = styled.li`
  margin: 0.5em 0.75em 1.5em;

  background: #f8f8fa;
  display: inline-flex;
  flex-direction: column;

  width: 287px;
  height: 223px;

  border-radius: 16px;

  list-style: none;

  cursor: pointer;

  h3 {
    &:nth-child(3) {
      margin-top: .5em;
      font-size: 1.5em;
      color: #313136;
      text-align: end;
      padding-right: 0.75em;

      span {
        font-weight: 300;
        font-size: 0.75em;

        &:nth-child(1) {
          font-weight: 700;
          font-size: 0.65em;
        }
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.25em;

  button {
    background: transparent;
    border: none;
    font-size: 2em;
    font-weight: bold;
    color: #c8c8ca;
    padding-right: 0.5em;
    margin-top: -1em;

    cursor: pointer;
  }
`;

export const HeaderInfo = styled.div`
  h3 {
    margin-top: 1.5em;
    margin-bottom: -0.5em;
    color: #313136;
  }

  p {
    letter-spacing: 0.10em;
    margin-bottom: -0.25em;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

export const CarImage = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

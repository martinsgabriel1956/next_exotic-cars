import styled from 'styled-components';

interface ButtonProps {
  isSignIn?: boolean;
}

export const Container = styled.button<ButtonProps>`
  color: #7B89F4;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  font-size: 1em;
  border: ${props => props.isSignIn === true ? '3px solid #7B89F4' : 'none'};
  padding: .35em .75em;
  border-radius: .75em;
  transition: all .3s;

  &:hover {
    background: ${props => props.isSignIn === true ? '#7B89F4' : 'transparent'};
    color: ${props => props.isSignIn === true ? '#fff' : '#7B89F4'};
  }

  @media (min-width: 601px) and (max-width: 687px) {
    padding: .35em .175em;

    & + button {
      margin-left: .75em;
    }
  }

  @media (min-width: 688px) and (max-width: 826px) {
    font-size: 1em;
    padding: .35em .5em;
  }
`;

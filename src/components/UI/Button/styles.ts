import styled from 'styled-components';

export const Container = styled.button`
  color: #7B89F4;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  font-size: 1em;
  border: ${props => props.isSignIn === true ? '2px solid #7B89F4' : 'none'};
  padding: .45em .85em;
  border-radius: .75em;
  transition: all .3s;

  &:hover {
    background: ${props => props.isSignIn === true ? '#7B89F4' : 'transparent'};
    color: ${props => props.isSignIn === true ? '#fff' : '#7B89F4'};
  }
`;

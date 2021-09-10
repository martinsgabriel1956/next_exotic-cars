import { Container } from './styles';
import { MdKeyboardArrowUp } from 'react-icons/md';

export function BackToTopButton() {
  function scrollTop() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container onClick={scrollTop}>
      <MdKeyboardArrowUp size={40} />
    </Container>
  );
};
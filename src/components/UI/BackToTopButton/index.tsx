import { Container } from "./styles";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (window.scrollY >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);
  
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShow(false);
  }
  

  return (
    <>
      <Container showInPage={show} onClick={scrollTop}>
        <MdKeyboardArrowUp
          size={120}
          style={{
            color: "#fff",
          }}
        />
      </Container>
    </>
  );
}

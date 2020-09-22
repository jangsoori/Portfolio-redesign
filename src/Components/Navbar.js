import React, { useEffect } from "react";
import { Container, SectionWrapper } from "./styled/Container";
import styled, { css } from "styled-components";

const NavbarWrapper = styled(SectionWrapper)`
  z-index: 1000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.1s linear;
  ${({ scroll }) =>
    scroll &&
    css`
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
      color: white;
    `}
`;

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
`;
const StyledLogo = styled.h1`
  font-weight: 300;
  font-size: 3rem;
`;
const StyledMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  text-align: center;
  column-gap: 2.7rem;
`;
const StyledMenuItem = styled.li`
  font-weight: 300;
  font-size: 2.4rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

export default function Navbar() {
  //HANDLE BACKGROUND CHANGE ON SCROLL
  const [scroll, setScroll] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, [scroll]);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <NavbarWrapper primary={scroll && true} scroll={scroll && true}>
      <Container>
        <StyledNavbar>
          <StyledLogo>Gracjan Kolodziej</StyledLogo>
          <StyledMenu>
            <StyledMenuItem>Home</StyledMenuItem>
            <StyledMenuItem>Projects</StyledMenuItem>
            <StyledMenuItem>About</StyledMenuItem>
            <StyledMenuItem>Contact</StyledMenuItem>
          </StyledMenu>
        </StyledNavbar>
      </Container>
    </NavbarWrapper>
  );
}

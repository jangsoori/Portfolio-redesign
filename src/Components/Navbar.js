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
  @media only screen and (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 30rem;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px 0 rgb(0, 0, 0);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, max-content);
    padding-top: 10rem;
    gap: 2rem;
    transform: translateX(100%);
    transition: transform 0.5s;
    z-index: 100001;
    ${({ isMobile }) =>
      isMobile &&
      css`
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        color: white;
      `}
  }
`;
const StyledMenuItem = styled.li`
  font-weight: 300;
  font-size: 2.4rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const StyledBurger = styled.button`
  width: 3rem;
  height: 2rem;
  background: none;
  border: none;
  z-index: 10001;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  display: none;
  span {
    position: absolute;
    height: 2px;
    width: 3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    left: 0;

    :nth-child(1) {
      top: 50%;
      transform: translateY(-50%);
    }
    :nth-child(2) {
      top: 0;
    }
    :nth-child(3) {
      bottom: 0;
    }
    ${({ scroll }) =>
      scroll &&
      css`
        background-color: white;
      `}
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`;

const StyledClose = styled(StyledBurger)`
  position: absolute;
  top: 20px;
  right: 20px;
  span {
    background: white;

    :nth-child(1) {
      transform: rotate(45deg);
    }
    :nth-child(2) {
      transform: rotate(-45deg);
      top: 10px;
    }
  }
`;

export default function Navbar() {
  //HANDLE BACKGROUND CHANGE ON SCROLL
  const [scroll, setScroll] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //This fixes navbar not having right background on page refresh
    handleScroll();
  }, [scroll]);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(open);
  return (
    <NavbarWrapper primary={scroll && true} scroll={scroll && true}>
      <Container>
        <StyledNavbar>
          <StyledLogo>Gracjan Kolodziej</StyledLogo>
          <StyledMenu isMobile={open}>
            <StyledMenuItem>
              <a href="#">Home</a>
            </StyledMenuItem>
            <StyledMenuItem>
              <a href="#projects">Projects</a>
            </StyledMenuItem>
            <StyledMenuItem>
              <a href="#skills">Skills</a>
            </StyledMenuItem>
            <StyledMenuItem>
              <a href="#about">About</a>
            </StyledMenuItem>
            <StyledClose onClick={() => handleClick()}>
              <span></span>
              <span></span>
            </StyledClose>
          </StyledMenu>
          <StyledBurger
            onClick={() => handleClick()}
            white={scroll && true}
            scroll={scroll && true}
            open={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </StyledBurger>
        </StyledNavbar>
      </Container>
    </NavbarWrapper>
  );
}

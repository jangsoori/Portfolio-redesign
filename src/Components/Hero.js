import React from "react";
import styled from "styled-components";
import { Container, SectionWrapper } from "./styled/Container";
const heroimg = require("../Assets/Images/Hero.png");

const StyledHeroWrapper = styled(SectionWrapper)`
  height: 100vh;
`;

const StyledHero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 720px) {
    justify-content: center;
  }
`;

const StyledHeroLeft = styled.section`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 3.5rem;

  @media screen and (max-height: 450px) and (orientation: landscape) {
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    font-size: 50%;
  }
`;

const StyledText = styled.h2`
  font-size: 7.2rem;
  font-weight: 200;
  ${"" /* color: ${({ theme }) => theme.colors.primary}; */}
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 720px) {
    font-size: 5rem;
    justify-self: center;
  }
  @media screen and (max-height: 450px) and (orientation: landscape) {
    font-size: 3.5rem;
    grid-column: 1/3;
    justify-self: start;
  }
`;

const StyledBtnsWrapper = styled.section`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  column-gap: 3rem;
  @media only screen and (max-width: 720px) {
    justify-content: center;
  }
  @media screen and (max-height: 450px) and (orientation: landscape) {
    grid-row: 2/3;
    grid-column: 2/3;
    align-items: end;
  }
`;
const StyledBtn = styled.button`
  background: white;

  text-transform: uppercase;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 18rem;
  font-size: 2.4rem;
  font-weight: 300;
  padding: 1rem 0;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  @media only screen and (max-width: 720px) {
    font-size: 1.6rem;
    padding: 0.5rem 0;
    width: 10rem;
  }
  @media screen and (max-height: 450px) and (orientation: landscape) {
    width: max-content;
    padding: 1rem;
  }
`;

const StyledSocialsWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 4rem;
  justify-self: left;

  ${"" /* social icons */}
  i {
    font-size: 4.4rem;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media only screen and (max-width: 720px) {
    justify-self: center;
  }
  @media screen and (max-height: 450px) and (orientation: landscape) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

const StyledHeroRight = styled.section``;

const StyledHeroImg = styled.img`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-height: 450px) and (orientation: landscape) {
    display: block;
    position: absolute;
    top: 5rem;
    right: 10%;
    height: 15rem;
  }
`;
export default function Hero() {
  return (
    <StyledHeroWrapper secondary>
      <Container style={{ height: "100%" }}>
        <StyledHero id="hero">
          <StyledHeroLeft>
            <StyledText>
              Hi!
              <br />
              I’m <span>Gracjan</span>,
              <br />I build websites.
            </StyledText>
            <StyledBtnsWrapper>
              <StyledBtn>resume</StyledBtn>
              <StyledBtn>email me!</StyledBtn>
            </StyledBtnsWrapper>
            <StyledSocialsWrapper>
              <i class="devicon-github-plain"></i>
              <i class="devicon-linkedin-plain"></i>
              <i class="devicon-codepen-plain"></i>
            </StyledSocialsWrapper>
          </StyledHeroLeft>
          <StyledHeroRight>
            <StyledHeroImg src={heroimg} alt="That's me!" />
          </StyledHeroRight>
        </StyledHero>
      </Container>
    </StyledHeroWrapper>
  );
}

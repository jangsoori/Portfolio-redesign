import React from "react";
import styled from "styled-components";
import { Container, SectionWrapper } from "./styled/Container";
const heroimg = require("../Assets/Images/Hero.png");

const StyledHeroWrapper = styled(SectionWrapper)`
  height: 100%;
`;

const StyledHero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26rem 0;
`;

const StyledHeroLeft = styled.section`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 3.5rem;
`;

const StyledText = styled.h2`
  font-size: 7.2rem;
  font-weight: 200;
  ${"" /* color: ${({ theme }) => theme.colors.primary}; */}
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledBtnsWrapper = styled.section`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  column-gap: 3rem;
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
`;

const StyledHeroRight = styled.section``;

const StyledHeroImg = styled.img``;
export default function Hero() {
  return (
    <StyledHeroWrapper secondary>
      <Container>
        <StyledHero>
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

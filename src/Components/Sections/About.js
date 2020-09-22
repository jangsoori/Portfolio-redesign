import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

//Data
const text =
  "Hi! My name is Gracjan. \n\nI am a front-end web developer based in Manchester, UK.  \nFor development process I use React styled by SCSS or Styled Components. \nMy main focus is on writing good, maintainable code in accordance with DRY principles to maximize reusability and readability. \nI never overlook accessibility, responsiveness, performance as they are key to well developed website.";
//Styles
const SectionAboutContent = styled.section``;

const SectionAboutContentText = styled.p`
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.5;
  color: white;
`;
export default function About() {
  return (
    <SectionWrapper padded primary>
      <Container>
        <StyledSectionContent id="about">
          <SectionHeader secondary>
            <SectionTitle>About</SectionTitle>
            <SectionSubtitle>Few words about me</SectionSubtitle>
          </SectionHeader>
          <SectionAboutContent>
            <SectionAboutContentText>
              Hi! My name is Gracjan. <br />
              <br />I am a front-end web developer based in Manchester, UK.
              <br />
              For development process I use React styled by SCSS or Styled
              Components. <br />
              My main focus is on writing good, maintainable code in accordance
              with DRY principles to maximize reusability and readability.
              <br />I never overlook accessibility, responsiveness, performance
              as they are key to well developed website.
            </SectionAboutContentText>
          </SectionAboutContent>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

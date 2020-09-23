import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

const InfoWrapper = styled.section`
  display: grid;
  justify-self: center;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1rem;
  p,
  i {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    @media only screen and (max-width: 670px) {
      font-size: 2.2em;
    }
    @media only screen and (max-width: 350px) {
      font-size: 1.4rem;
    }
  }
`;
export default function Contact() {
  return (
    <SectionWrapper padded secondary>
      <Container>
        <StyledSectionContent id="contact">
          <SectionHeader primary>
            <SectionTitle>Contact</SectionTitle>
            <SectionSubtitle>This is how you can reach me</SectionSubtitle>
          </SectionHeader>
          <InfoWrapper>
            <InfoItem>
              <i className="fas fa-envelope"></i>
              <p> gracjankolodziej0 (at) gmail.com</p>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-phone"></i>
              <p>(+44) 07587472183</p>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-map-marker-alt"></i>
              <p> Manchester, UK</p>
            </InfoItem>
          </InfoWrapper>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

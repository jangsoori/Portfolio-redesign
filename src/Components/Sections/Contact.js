import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

export default function Contact() {
  return (
    <SectionWrapper padded secondary>
      <Container>
        <StyledSectionContent>
          <SectionHeader primary>
            <SectionTitle>Contact</SectionTitle>
            <SectionSubtitle>This is how you can reach me</SectionSubtitle>
          </SectionHeader>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

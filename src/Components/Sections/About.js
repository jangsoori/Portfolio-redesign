import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

export default function About() {
  return (
    <SectionWrapper padded primary>
      <Container>
        <StyledSectionContent>
          <SectionHeader secondary>
            <SectionTitle>About</SectionTitle>
            <SectionSubtitle>Few words about me</SectionSubtitle>
          </SectionHeader>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

export default function Skills() {
  return (
    <SectionWrapper padded secondary>
      <Container>
        <StyledSectionContent>
          <SectionHeader primary>
            <SectionTitle>Skills</SectionTitle>
            <SectionSubtitle>Things I have learned, so far</SectionSubtitle>
          </SectionHeader>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

export default function Projects() {
  return (
    <SectionWrapper padded primary>
      <Container>
        <StyledSectionContent>
          <SectionHeader>
            <SectionTitle>Projects</SectionTitle>
            <SectionSubtitle>
              Collection of projects developed by me
            </SectionSubtitle>
          </SectionHeader>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

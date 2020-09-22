import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";
import { Container, SectionWrapper } from "../styled/Container";
import ProjectsList from "./ProjectsList";

const StyledProjectsContent = styled.section``;

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
          <StyledProjectsContent>
            <ProjectsList />
          </StyledProjectsContent>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

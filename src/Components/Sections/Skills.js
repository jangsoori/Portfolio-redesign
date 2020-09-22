import React from "react";
import styled from "styled-components";

import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StyledSectionContent,
} from "../styled/SectionHeader";

import { Container, SectionWrapper } from "../styled/Container";

//ICON IMPORTS
import cssIcon from "../../Assets/Icons/css3.svg";
import htmlIcon from "../../Assets/Icons/html5.svg";
import jsIcon from "../../Assets/Icons/javascript.svg";
import reactIcon from "../../Assets/Icons/react.svg";
import reduxIcon from "../../Assets/Icons/redux.svg";
import sassIcon from "../../Assets/Icons/sass.svg";
import styledIcon from "../../Assets/Icons/styled.svg";
import gitIcon from "../../Assets/Icons/git.svg";
import npmIcon from "../../Assets/Icons/npm.svg";
import webpackIcon from "../../Assets/Icons/webpack.svg";
import SVG from "react-inlinesvg";

//STYLED
const StyledSkillsContent = styled.section``;
const StyledSkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 6.4rem;
`;
const StyledSkillsListItem = styled.li`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;
const StyledSkillsListItemIcon = styled(SVG)``;
const StyledSkillsListItemTitle = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const skills = [
  { title: "HTML5", src: htmlIcon },
  { title: "CSS3", src: cssIcon },
  { title: "JavaScript (ES6+)", src: jsIcon },
  { title: "React", src: reactIcon },
  { title: "Redux", src: reduxIcon },
  { title: "Sass", src: sassIcon },
  { title: "Styled Components", src: styledIcon },
  { title: "Git", src: gitIcon },
  { title: "NPM", src: npmIcon },
  { title: "Webpack", src: webpackIcon },
];
const renderSkills = (list) =>
  list.map((item) => (
    <StyledSkillsListItem>
      <StyledSkillsListItemTitle>{item.title}</StyledSkillsListItemTitle>
      <StyledSkillsListItemIcon src={item.src} alt={item.title} />
    </StyledSkillsListItem>
  ));
export default function Skills() {
  return (
    <SectionWrapper padded secondary>
      <Container>
        <StyledSectionContent>
          <SectionHeader primary>
            <SectionTitle>Skills</SectionTitle>
            <SectionSubtitle>Things I have learned, so far</SectionSubtitle>
          </SectionHeader>
          <StyledSkillsContent>
            <StyledSkillsList>{renderSkills(skills)}</StyledSkillsList>
          </StyledSkillsContent>
        </StyledSectionContent>
      </Container>
    </SectionWrapper>
  );
}

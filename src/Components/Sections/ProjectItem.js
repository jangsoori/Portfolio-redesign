import React from "react";
import styled from "styled-components";
import ProjectDetails from "./ProjectDetails";

const StyledProjectItem = styled.li`
  padding: 1.5rem;
  display: grid;
  grid-template-rows: repeat(4, auto);
  background: white;
  ${"" /* max-width: 60rem; */}
  border-radius: 2px;
  gap: 1rem;
`;

//Layout
const ProjectHeader = styled.header`
  grid-row: 1/2;
  display: flex;
  justify-content: space-between;
`;

//Elements
//Header
const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.4rem;
  font-weight: 500;
`;
const ProjectInfoBtn = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  cursor: pointer;
`;

//Description
const ProjectDesc = styled.p`
  font-style: italic;
  font-weight: 300;
  font-size: 1.4rem;
  opacity: 0.5;
  width: 80%;
`;

//Stack
export const ProjectStack = styled.ul`
  ${"" /* display: grid;
  grid-template-columns: repeat(
    ${({ numberOfItems }) => numberOfItems},
    max-content
  ); */}
  ${"" /* gap: 1rem; */}
  display:flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const ProjectStackItem = styled.li`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 1.6rem;
  font-weight: 300;
  font-size: 1.4rem;
  color: white;
  border-radius: 2px;
  text-align: center;
  margin: 0 0 5px 5px;
`;

//External Links

const ProjectLinks = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-self: end;
  gap: 1rem;
`;
const ProjectLinksItem = styled.li`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectLink = styled.a`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.1rem;
  cursor: pointer;

  i {
    font-size: 1rem;
  }
`;

export const renderStack = (stack) =>
  stack.map((item, i) => <ProjectStackItem key={i}>{item}</ProjectStackItem>);
export default function ProjectItem(props) {
  const { name, desc, stack, links } = props.project;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <StyledProjectItem>
      <ProjectHeader>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectInfoBtn
          onClick={() => handleOpen()}
          className="fas fa-info-circle"
        ></ProjectInfoBtn>
      </ProjectHeader>
      <ProjectDesc>{desc}</ProjectDesc>
      <ProjectStack numberOfItems={stack.length}>
        {renderStack(stack)}
      </ProjectStack>
      <ProjectLinks>
        <ProjectLinksItem>
          <ProjectLink href={links.git} target="_blank" rel="noopener">
            Github<i className="fas fa-external-link-alt"></i>
          </ProjectLink>
        </ProjectLinksItem>
        <ProjectLinksItem>
          <ProjectLink href={links.live} target="_blank" rel="noopener">
            Live<i className="fas fa-external-link-alt"></i>
          </ProjectLink>
        </ProjectLinksItem>
      </ProjectLinks>
      <ProjectDetails
        handleOpen={handleOpen}
        details={props.project}
        open={open}
      />
    </StyledProjectItem>
  );
}

//TODO - On ProjectInfoBtn show modal with images / gifs / mobile version images

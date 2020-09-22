import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    name: "SpaceZ",
    desc:
      "A landing page for fictional startup that will send you to the space! Hopefully they will be able to take you back to the Earth...",
    stack: ["React", "React-Router", "SCSS"],
    links: {
      git: "https://github.com/jangsoori/spacez",
      live: "https://spacez.web.app/",
    },
  },
  {
    name: "SpaceZ",
    desc:
      "A landing page for fictional startup that will send you to the space! Hopefully they will be able to take you back to the Earth...",
    stack: ["React", "React-Router", "SCSS"],
    links: {
      git: "https://github.com/jangsoori/spacez",
      live: "https://spacez.web.app/",
    },
  },
  {
    name: "SpaceZ",
    desc:
      "A landing page for fictional startup that will send you to the space! Hopefully they will be able to take you back to the Earth...",
    stack: ["React", "React-Router", "SCSS"],
    links: {
      git: "https://github.com/jangsoori/spacez",
      live: "https://spacez.web.app/",
    },
  },
  {
    name: "SpaceZ",
    desc:
      "A landing page for fictional startup that will send you to the space! Hopefully they will be able to take you back to the Earth...",
    stack: ["React", "React-Router", "SCSS"],
    links: {
      git: "https://github.com/jangsoori/spacez",
      live: "https://spacez.web.app/",
    },
  },
];

const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
  justify-content: left;
  gap: 2rem;
`;

const renderItems = (list) =>
  list.map((item) => <ProjectItem project={item} />);
export default function ProjectsList() {
  return <StyledProjectsList>{renderItems(projects)}</StyledProjectsList>;
}

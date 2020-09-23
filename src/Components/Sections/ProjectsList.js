import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    name: "My Team",

    stack: ["react", "sass"],
    links: {
      live: "https://awesometeams.netlify.app",
      git: "https://github.com/jangsoori/my-team",
    },
    desc:
      "Fully responsive, multi page website for fictional company specialising in recruitment.",
  },
  {
    name: "SpaceZ",

    stack: ["react", "sass"],
    links: {
      live: "https://spacez.web.app/",
      git: "https://github.com/jangsoori/spacez",
    },
    desc:
      "A landing page for fictional space travel company SpaceZ. Fully responsive, available to view on mobile and tablets with great results.",
  },
  {
    name: "The Run Up",

    stack: ["react", "redux", "sass", "firebase", "firestore"],
    links: {
      live: "https://therunup-e8116.web.app/",
      git: "https://github.com/jangsoori/therunup",
    },
    desc:
      "A crud application with authentication that let's you create and manage your runs.",
  },
  {
    name: "Pocket Weather",

    stack: ["react", "CSS", "OpenWeather API"],
    links: {
      live: "https://pocketweather-50927.web.app",
      git: "https://github.com/jangsoori/weather",
    },
    desc:
      "A simple application to let you check weather in any country in the world. You can change units to metric or imperial.",
  },
];

const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 600px));
  justify-content: left;
  gap: 2rem;
`;

const renderItems = (list) =>
  list.map((item) => <ProjectItem project={item} />);
export default function ProjectsList() {
  return <StyledProjectsList>{renderItems(projects)}</StyledProjectsList>;
}
